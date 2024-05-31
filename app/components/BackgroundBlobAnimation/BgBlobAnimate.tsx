import styles from "./BgBlobAnimate.module.css";
const BgBlobAnimate = () => {
  return (
    <div className="flex justify-center items-center w-full h-full absolute">
      <svg
        width="1000"
        height="450"
        viewBox="0 0 397 410"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`overflow-visible blur-2xl opacity-20 `}
      >
        <path
          className={styles.blob}
          // fill-rule="evenodd"
          // clip-rule="evenodd"
          d="M201.349 0.747984C238.114 3.59568 271.795 18.9534 302.74 38.9569C333.587 58.8977 362.689 82.5283 378.822 115.472C395.186 148.889 401.791 187.622 393.27 223.828C385.074 258.651 354.393 281.374 333.015 310.094C309.56 341.605 297.575 385.004 261.549 400.785C224.666 416.942 179.856 410.239 143.395 393.157C109.143 377.11 92.2891 340.426 69.0813 310.614C47.2462 282.565 21.5852 257.566 11.3627 223.55C0.0788197 186.003 -5.86417 144.941 8.30468 108.38C22.8116 70.9456 54.1818 42.0083 89.3054 22.4251C123.199 3.52762 162.635 -2.25065 201.349 0.747984Z"
          fill="#9657d6"
        />
      </svg>
    </div>
  );
};

export default BgBlobAnimate;
