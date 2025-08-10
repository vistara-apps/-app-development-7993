import React from 'react'
import { CheckCircle, AlertCircle, XCircle, Info, X } from 'lucide-react'

const Alert = ({ 
  type = 'info', 
  title, 
  message, 
  onClose, 
  className = '',
  showIcon = true 
}) => {
  const typeConfig = {
    success: {
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      iconColor: 'text-green-600',
      icon: CheckCircle
    },
    error: {
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-800',
      iconColor: 'text-red-600',
      icon: XCircle
    },
    warning: {
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-800',
      iconColor: 'text-yellow-600',
      icon: AlertCircle
    },
    info: {
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800',
      iconColor: 'text-blue-600',
      icon: Info
    }
  }

  const config = typeConfig[type]
  const Icon = config.icon

  return (
    <div className={`rounded-md border p-4 ${config.bgColor} ${config.borderColor} ${className} animate-slide-down`}>
      <div className="flex">
        {showIcon && (
          <div className="flex-shrink-0">
            <Icon className={`h-5 w-5 ${config.iconColor}`} />
          </div>
        )}
        <div className={`${showIcon ? 'ml-3' : ''} flex-1`}>
          {title && (
            <h3 className={`text-sm font-medium ${config.textColor} mb-1`}>
              {title}
            </h3>
          )}
          {message && (
            <div className={`text-sm ${config.textColor}`}>
              {message}
            </div>
          )}
        </div>
        {onClose && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={onClose}
                className={`inline-flex rounded-md p-1.5 ${config.textColor} hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/20`}
              >
                <span className="sr-only">Dismiss</span>
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export const Toast = ({ type, message, onClose, duration = 5000 }) => {
  React.useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(onClose, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm w-full animate-slide-down">
      <Alert type={type} message={message} onClose={onClose} />
    </div>
  )
}

export default Alert
