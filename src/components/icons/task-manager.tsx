// Can't find the original icon, so I made a new one
export const TaskManagerIcon = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='256'
      height='192'
      viewBox='0 0 256 192'
      fill='none'
      {...props}
    >
      <path
        d='M0 39.895C0 17.8616 17.9086 0 40 0H216C238.091 0 256 17.8616 256 39.895V151.601C256 173.634 238.091 191.496 216 191.496H40C17.9086 191.496 0 173.634 0 151.601V39.895ZM40 15.958C26.7452 15.958 16 26.675 16 39.895V151.601C16 164.821 26.7452 175.538 40 175.538H216C229.255 175.538 240 164.821 240 151.601V39.895C240 26.675 229.255 15.958 216 15.958H40Z'
        fill='currentColor'
      />
      <path
        d='M13 125.5L32 124L48 143L58 130L70.5 40L88 66L96 97.5L154.5 146L178 50.5L190.5 119.5L202 110.5L221.5 127.5L243.5 133'
        stroke='currentColor'
        strokeWidth='14'
      />
    </svg>
  )
}
