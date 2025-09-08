import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UBSpinner from './UBSpinner';
import { hasModuleClass } from '../../test/testUtils';

describe('UBSpinner', () => {
  it('renders without crashing', () => {
    render(<UBSpinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<UBSpinner size="lg" />);
    expect(screen.getByTestId('spinner-visual')).toHaveAttribute('data-size', 'lg');

    rerender(<UBSpinner size="md" />);
    expect(screen.getByTestId('spinner-visual')).toHaveAttribute('data-size', 'md');
  });

  it('applies correct speed classes', () => {
    const { rerender } = render(<UBSpinner speed="fast" />);
    expect(screen.getByTestId('spinner-visual')).toHaveAttribute('data-speed', 'fast');

    rerender(<UBSpinner speed="slow" />);
    expect(screen.getByTestId('spinner-visual')).toHaveAttribute('data-speed', 'slow');

    rerender(<UBSpinner speed="normal" />);
    expect(screen.getByTestId('spinner-visual')).toHaveAttribute('data-speed', 'normal');
  });

  it('shows label when showLabel is true', () => {
    render(<UBSpinner showLabel label="Custom loading text" />);
    expect(screen.getByTestId('spinner-label')).toBeInTheDocument();
    expect(screen.getByTestId('spinner-label')).toHaveTextContent('Custom loading text');
  });

  it('hides label when showLabel is false', () => {
    render(<UBSpinner showLabel={false} label="Custom loading text" />);
    expect(screen.queryByTestId('spinner-label')).not.toBeInTheDocument();
    // Screen reader text should still be present
    expect(screen.getByLabelText('Custom loading text')).toBeInTheDocument();
  });

  it('always provides screen reader text', () => {
    render(<UBSpinner label="Loading data" />);
    // Screen reader text should be present but visually hidden
    expect(screen.getByText('Loading data')).toBeInTheDocument();
  });

  it('uses default label when none provided', () => {
    render(<UBSpinner />);
    expect(screen.getByLabelText('Loading...')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<UBSpinner className="custom-spinner" data-testid="spinner" />);
    expect(screen.getByTestId('spinner')).toHaveClass('custom-spinner');
  });

  it('forwards refs correctly', () => {
    let ref: HTMLDivElement | null = null;
    render(<UBSpinner ref={el => (ref = el)} />);
    expect(ref).toBeInstanceOf(HTMLDivElement);
  });

  it('has correct accessibility attributes', () => {
    render(<UBSpinner label="Processing request" />);
    const spinner = screen.getByRole('status');
    expect(spinner).toHaveAttribute('aria-label', 'Processing request');
  });

  it('has aria-hidden on the visual spinner element', () => {
    render(<UBSpinner />);
    const visualSpinner = screen.getByTestId('spinner-visual');
    expect(visualSpinner).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies correct label size classes when showLabel is true', () => {
    const { rerender } = render(<UBSpinner size="md" showLabel />);
    const labelElement = screen.getByTestId('spinner-label');
    expect(hasModuleClass(labelElement, 'mdLabel')).toBe(true);

    rerender(<UBSpinner size="lg" showLabel />);
    const lgLabelElement = screen.getByTestId('spinner-label');
    expect(hasModuleClass(lgLabelElement, 'lgLabel')).toBe(true);
  });

  it('passes through additional props', () => {
    render(<UBSpinner data-testid="custom-spinner" id="spinner-1" />);
    const spinner = screen.getByTestId('custom-spinner');
    expect(spinner).toHaveAttribute('id', 'spinner-1');
  });
});
