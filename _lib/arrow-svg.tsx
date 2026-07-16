interface Props {
  buttonColor?: string;
  mobileMenu?: boolean;
  cssClasses?: string;
}

const ArrowSvg = ({ buttonColor, mobileMenu, cssClasses }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${cssClasses} ${mobileMenu && "rotate-180"}`}
    >
      <g clipPath="url(#clip0_308_327)">
        <path
          d="M0.072937 20.2083L7.72918 10L0.072937 -0.208313H2.77085L10.4271 10L2.77085 20.2083H0.072937ZM9.26043 20.2083L16.9167 10L9.26043 -0.208313H11.9583L19.6146 10L11.9583 20.2083H9.26043Z"
          fill={
            buttonColor === "blue" || buttonColor === "pink"
              ? "#FFFFFF"
              : mobileMenu
              ? "#C86B7B"
              : "#353C42"
          }
        />
      </g>
      <defs>
        <clipPath id="clip0_308_327">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowSvg;
