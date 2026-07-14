export function Button({ children, variant = 'primary', size = 'm', onClick, disabled, type = 'button' }) {
  const styles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  const sizes = {
    xs: 'px-2 py-1 text-xs',
    s: 'px-3 py-1.5 text-sm',
    m: 'px-4 py-2 text-base',
    l: 'px-5 py-2.5 text-lg',
    xl: 'px-6 py-3 text-xl',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg font-medium transition-colors ${styles[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}
