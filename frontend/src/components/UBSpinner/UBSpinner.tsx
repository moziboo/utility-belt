import { forwardRef } from 'react';
import styles from './UBSpinner.module.css';

interface UBSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'md' | 'lg';
  speed?: 'slow' | 'normal' | 'fast';
  label?: string;
  showLabel?: boolean;
}

const UBSpinner = forwardRef<HTMLDivElement, UBSpinnerProps>(
  (
    {
      size = 'md',
      speed = 'normal',
      label = 'Loading...',
      showLabel = false,
      className,
      ...restProps
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label={label}
        className={`${styles.spinnerContainer} ${className || ''}`}
        {...restProps}
      >
        <div
          className={`${styles.spinner} ${styles[size]} ${styles[speed]}`}
          aria-hidden="true"
          data-testid="spinner-visual"
          data-speed={speed}
          data-size={size}
        >
          <div className={styles.spinnerInner}></div>
        </div>
        {showLabel && (
          <span className={`${styles.label} ${styles[`${size}Label`]}`} data-testid="spinner-label">
            {label}
          </span>
        )}
        {/* Screen reader text */}
        <span className={styles.srOnly}>{label}</span>
      </div>
    );
  }
);

UBSpinner.displayName = 'UBSpinner';

export default UBSpinner;
export type { UBSpinnerProps };
