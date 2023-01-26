export interface LogoProps {
  width?: number
  height?: number
}

export const Logo = (props: LogoProps) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 315 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M0.0525078 71.9874C-0.0412056 71.9472 -0.0144304 71.6127 0.172996 70.3147C0.378273 68.8651 0.654951 67.2504 1.02534 65.3235C3.06919 54.6363 6.55443 43.8554 11.5302 32.8291C12.088 31.5847 12.918 29.8719 13.2259 29.3277C13.3286 29.1448 13.5249 28.7835 13.6588 28.5248C15.6982 24.6532 18.2552 20.7547 21.0175 17.3068C23.2934 14.4655 25.8326 11.8071 28.3539 9.63038C31.5893 6.83814 35.311 4.44734 38.7606 2.93971C42.6519 1.24028 47.1948 0.29467 52.5632 0.0671878C53.1657 0.0448856 53.8484 0.0136625 54.0805 0.00474159C54.6919 -0.0220211 97.8223 0.0716483 100.089 0.107332L101.986 0.134094L101.999 0.361577C102.022 0.713952 101.549 4.73727 101.022 8.74275C100.473 12.9088 99.6386 17.6904 98.7728 21.6111C97.5858 26.986 95.8276 32.8871 94.1318 37.1736C90.0218 47.562 83.9304 56.0145 76.1701 62.0941C71.0649 66.0907 65.9821 68.593 59.7702 70.1631C56.6241 70.9615 53.2995 71.4923 49.7295 71.7688C46.7039 72.0008 48.5826 71.9874 23.4005 71.9963C10.5886 72.0052 0.079283 71.9963 0.0525078 71.9874ZM66.3926 52.3168C66.4283 52.2811 66.3926 46.2595 66.3569 46.2239C66.3435 46.206 61.225 46.1793 54.9819 46.1614L43.6381 46.1302V30.0548V13.9838H43.5355C43.3168 13.9838 36.8595 14.7197 36.8417 14.7465C36.8328 14.7554 36.8372 23.199 36.8462 33.5027L36.864 52.241L38.6579 52.2767C43.0134 52.3614 46.7619 52.3793 56.2404 52.3614C61.8141 52.3481 66.3793 52.3302 66.3926 52.3168Z"
        fill="#47BB78"
      />
      <path
        d="M124.96 45.56H138.88V50H119.44V23.6H124.96V45.56ZM145.663 27.12C144.517 27.12 143.663 26.88 143.103 26.4C142.543 25.8933 142.263 25.16 142.263 24.2C142.263 23.2133 142.543 22.48 143.103 22C143.663 21.4933 144.517 21.24 145.663 21.24C146.81 21.24 147.663 21.4933 148.223 22C148.783 22.48 149.063 23.2133 149.063 24.2C149.063 25.16 148.783 25.8933 148.223 26.4C147.663 26.88 146.81 27.12 145.663 27.12ZM148.383 30V50H142.903V30H148.383ZM167.313 30H172.993L165.393 50H159.073L151.473 30H157.313L162.273 45.8L167.313 30ZM185.074 50.4C182.967 50.4 181.127 49.9867 179.554 49.16C178.007 48.3333 176.807 47.1467 175.954 45.6C175.101 44.0533 174.674 42.1867 174.674 40C174.674 37.8133 175.101 35.9467 175.954 34.4C176.807 32.8533 177.994 31.6667 179.514 30.84C181.061 30.0133 182.821 29.6 184.794 29.6C186.821 29.6 188.541 30.0133 189.954 30.84C191.367 31.64 192.447 32.7467 193.194 34.16C193.941 35.5467 194.314 37.1333 194.314 38.92C194.314 39.4533 194.301 39.96 194.274 40.44C194.247 40.92 194.207 41.3467 194.154 41.72H178.194V37.92H191.754L189.114 38.88C189.114 37.2 188.727 35.9067 187.954 35C187.207 34.0933 186.141 33.64 184.754 33.64C183.741 33.64 182.861 33.88 182.114 34.36C181.394 34.84 180.847 35.56 180.474 36.52C180.101 37.4533 179.914 38.64 179.914 40.08C179.914 41.4933 180.114 42.6667 180.514 43.6C180.941 44.5067 181.527 45.1867 182.274 45.64C183.047 46.0933 183.967 46.32 185.034 46.32C186.207 46.32 187.154 46.0933 187.874 45.64C188.594 45.1867 189.154 44.56 189.554 43.76L193.914 45.44C193.487 46.48 192.834 47.3733 191.954 48.12C191.101 48.8667 190.074 49.44 188.874 49.84C187.701 50.2133 186.434 50.4 185.074 50.4ZM217.265 45.56H231.185V50H211.745V23.6H217.265V45.56ZM237.968 27.12C236.821 27.12 235.968 26.88 235.408 26.4C234.848 25.8933 234.568 25.16 234.568 24.2C234.568 23.2133 234.848 22.48 235.408 22C235.968 21.4933 236.821 21.24 237.968 21.24C239.115 21.24 239.968 21.4933 240.528 22C241.088 22.48 241.368 23.2133 241.368 24.2C241.368 25.16 241.088 25.8933 240.528 26.4C239.968 26.88 239.115 27.12 237.968 27.12ZM240.688 30V50H235.208V30H240.688ZM246.497 50V30H251.417L251.737 36L251.057 35.36C251.377 34.0533 251.884 32.9733 252.577 32.12C253.271 31.2667 254.111 30.64 255.097 30.24C256.111 29.8133 257.217 29.6 258.417 29.6C259.804 29.6 261.031 29.8667 262.097 30.4C263.191 30.9333 264.044 31.7467 264.657 32.84C265.297 33.9067 265.617 35.2533 265.617 36.88V50H260.137V38.44C260.137 36.7333 259.804 35.56 259.137 34.92C258.471 34.2533 257.604 33.92 256.537 33.92C255.791 33.92 255.057 34.1067 254.337 34.48C253.644 34.8267 253.071 35.4 252.617 36.2C252.191 37 251.977 38.0667 251.977 39.4V50H246.497ZM289.703 25.24L290.343 29.16C290.236 29.16 290.116 29.16 289.983 29.16C289.876 29.1333 289.756 29.12 289.623 29.12C288.396 29.12 287.476 29.4 286.863 29.96C286.249 30.4933 285.943 31.24 285.943 32.2L283.703 31.28C283.703 30.2133 283.916 29.2267 284.343 28.32C284.769 27.3867 285.396 26.64 286.223 26.08C287.076 25.52 288.089 25.24 289.263 25.24C289.316 25.24 289.383 25.24 289.463 25.24C289.543 25.24 289.623 25.24 289.703 25.24ZM283.143 46.24C285.303 46.24 286.969 46.7067 288.143 47.64C289.316 48.5733 289.903 49.88 289.903 51.56C289.903 53.08 289.463 54.36 288.583 55.4C287.703 56.4667 286.463 57.2667 284.863 57.8C283.289 58.3333 281.463 58.6 279.383 58.6C275.943 58.6 273.423 58.12 271.823 57.16C270.249 56.2 269.463 54.9467 269.463 53.4C269.463 52.3067 269.876 51.3867 270.703 50.64C271.556 49.8933 272.956 49.48 274.903 49.4L274.703 50.04C273.316 49.8 272.249 49.3467 271.503 48.68C270.783 47.9867 270.423 47.04 270.423 45.84C270.423 44.6133 270.889 43.6133 271.823 42.84C272.783 42.04 274.076 41.5733 275.703 41.44L278.103 42.56H277.543C276.396 42.64 275.583 42.88 275.103 43.28C274.649 43.6533 274.423 44.08 274.423 44.56C274.423 45.12 274.636 45.5467 275.063 45.84C275.516 46.1067 276.156 46.24 276.983 46.24H283.143ZM279.423 54.84C280.809 54.84 281.943 54.72 282.823 54.48C283.729 54.24 284.396 53.9333 284.823 53.56C285.276 53.1867 285.503 52.7733 285.503 52.32C285.503 51.8133 285.303 51.4 284.903 51.08C284.503 50.7867 283.783 50.64 282.743 50.64H275.983C275.343 50.64 274.809 50.8 274.383 51.12C273.983 51.44 273.783 51.88 273.783 52.44C273.783 53.1867 274.276 53.7733 275.263 54.2C276.276 54.6267 277.663 54.84 279.423 54.84ZM279.463 29.6C281.329 29.6 282.943 29.88 284.303 30.44C285.689 30.9733 286.743 31.7467 287.463 32.76C288.209 33.7733 288.583 34.9867 288.583 36.4C288.583 37.7867 288.209 38.9867 287.463 40C286.743 41.0133 285.689 41.8 284.303 42.36C282.943 42.8933 281.329 43.16 279.463 43.16C276.503 43.16 274.236 42.56 272.663 41.36C271.116 40.1333 270.343 38.48 270.343 36.4C270.343 34.9867 270.703 33.7733 271.423 32.76C272.169 31.7467 273.223 30.9733 274.583 30.44C275.943 29.88 277.569 29.6 279.463 29.6ZM279.463 33.04C278.396 33.04 277.516 33.3333 276.823 33.92C276.129 34.5067 275.783 35.32 275.783 36.36C275.783 37.4 276.129 38.2267 276.823 38.84C277.516 39.4267 278.396 39.72 279.463 39.72C280.529 39.72 281.396 39.4267 282.063 38.84C282.756 38.2267 283.103 37.4 283.103 36.36C283.103 35.32 282.756 34.5067 282.063 33.92C281.396 33.3333 280.529 33.04 279.463 33.04ZM302.336 29.6C304.363 29.6 306.136 30.0133 307.656 30.84C309.203 31.6667 310.403 32.8533 311.256 34.4C312.136 35.9467 312.576 37.8133 312.576 40C312.576 42.16 312.136 44.0267 311.256 45.6C310.403 47.1467 309.203 48.3333 307.656 49.16C306.136 49.9867 304.363 50.4 302.336 50.4C300.336 50.4 298.563 49.9867 297.016 49.16C295.469 48.3333 294.256 47.1467 293.376 45.6C292.523 44.0267 292.096 42.16 292.096 40C292.096 37.8133 292.523 35.9467 293.376 34.4C294.256 32.8533 295.469 31.6667 297.016 30.84C298.563 30.0133 300.336 29.6 302.336 29.6ZM302.336 33.68C301.323 33.68 300.456 33.92 299.736 34.4C299.043 34.8533 298.509 35.5467 298.136 36.48C297.763 37.4133 297.576 38.5867 297.576 40C297.576 41.4133 297.763 42.5867 298.136 43.52C298.509 44.4533 299.043 45.16 299.736 45.64C300.456 46.0933 301.323 46.32 302.336 46.32C303.323 46.32 304.163 46.0933 304.856 45.64C305.576 45.16 306.123 44.4533 306.496 43.52C306.869 42.5867 307.056 41.4133 307.056 40C307.056 38.5867 306.869 37.4133 306.496 36.48C306.123 35.5467 305.576 34.8533 304.856 34.4C304.163 33.92 303.323 33.68 302.336 33.68Z"
        fill="#18202B"
      />
    </g>
  </svg>
)