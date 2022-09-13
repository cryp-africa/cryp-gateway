/* eslint-disable max-len */
import React from "react";
/**
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="124" viewBox="0 0 96 124" width="96" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_225_9449)">
      <path
        d="M25.9868 0.417021C25.3669 0.436205 24.6994 0.66603 23.9419 1.26523C22.0872 0.54792 20.2883 0.298535 18.6799 1.75911C16.1963 1.436 15.3893 2.10291 14.7777 2.88154C14.2324 2.87025 10.698 2.3192 9.07692 4.74459C5.00367 4.26124 3.7163 7.14779 5.17505 9.83987C4.34292 11.1316 3.4808 12.4078 5.4263 14.8708C4.73817 16.2423 5.16492 17.7303 6.78605 19.5309C6.35817 21.4594 7.1993 22.8196 8.70792 23.8799C8.42555 26.5186 11.1203 28.0529 11.9247 28.5994C12.2337 30.1368 12.8775 31.5879 15.9552 32.3899C16.4629 34.6814 18.3124 35.0771 20.1038 35.5578C14.1837 39.0097 9.10692 43.5509 9.14142 54.6942L8.27405 56.2459C1.4858 60.3865 -4.62145 73.6953 4.92905 84.5125C5.55267 87.8986 6.59892 90.3308 7.53042 93.0225C8.92355 103.869 18.0162 108.948 20.4147 109.549C23.9288 112.234 27.6717 114.781 32.7368 116.566C37.5113 121.505 42.684 123.388 47.8849 123.385C47.9614 123.385 58.4888 121.506 63.2637 116.566C68.3284 114.781 72.0713 112.234 75.5858 109.549C77.9839 108.948 87.0765 103.869 88.4697 93.0225C89.4012 90.3308 90.4474 87.8986 91.0714 84.5125C100.621 73.6942 94.5143 60.385 87.726 56.2444L86.8576 54.6927C86.8921 43.5505 81.8153 39.0089 75.8952 35.5563C77.6862 35.0756 79.536 34.6799 80.0434 32.3884C83.121 31.586 83.7653 30.1353 84.0739 28.5979C84.8787 28.0514 87.5731 26.5171 87.2911 23.8784C88.7993 22.8181 89.6404 21.4575 89.2125 19.5294C90.834 17.7288 91.2604 16.2408 90.5723 14.869C92.5182 12.4075 91.6549 11.1312 90.8239 9.8395C92.2819 7.14742 90.9953 4.26049 86.9205 4.74421C85.3002 2.31882 81.7665 2.8695 81.2198 2.88078C80.6086 2.10254 79.8016 1.43563 77.3179 1.75874C75.7095 0.298159 73.911 0.547168 72.0559 1.26486C69.8532 -0.478584 68.3956 0.918801 66.7306 1.44729C64.0639 0.573122 63.4538 1.7704 62.1435 2.25826C59.235 1.64176 58.3512 2.98385 56.9569 4.40042L55.3351 4.36807C50.9483 6.96122 48.7688 12.2416 47.9963 14.9562C47.2234 12.2412 45.0492 6.96085 40.6632 4.36807L39.0413 4.40042C37.6452 2.98385 36.7617 1.64176 33.8532 2.25826C32.5425 1.7704 31.9347 0.573122 29.2658 1.44729C28.173 1.10048 27.168 0.379783 25.9849 0.416645L-4.125 53.4518"
        fill="black"
      />
      <path
        d="M17.2529 11.825C28.8914 17.8437 35.6575 22.7126 39.3644 26.8592C37.4662 34.4909 27.5632 34.8392 23.9422 34.6251C24.6835 34.2791 25.3023 33.8642 25.5217 33.2274C24.613 32.5797 21.3914 33.1589 19.1422 31.8917C20.0062 31.7119 20.4104 31.537 20.8143 30.8975C18.6895 30.2178 16.4005 29.6318 15.0543 28.5056C15.7807 28.5146 16.459 28.6689 17.4078 28.0087C15.5047 26.98 13.4737 26.1645 11.8957 24.5918C12.8797 24.5677 13.9405 24.582 14.2492 24.219C12.5073 23.1365 11.0373 21.9328 9.8208 20.6159C11.1978 20.7826 11.7794 20.6392 12.1124 20.3985C10.7954 19.0455 9.12892 17.9032 8.3343 16.2361C9.35655 16.5897 10.2922 16.7251 10.9664 16.2052C10.519 15.1926 8.60205 14.5953 7.49805 12.229C8.57467 12.3339 9.71617 12.4645 9.94455 12.229C9.44505 10.1873 8.5878 9.03926 7.74705 7.84988C10.0507 7.81565 13.5412 7.85891 13.3833 7.66369L11.9587 6.20387C14.209 5.59601 16.5115 6.30129 18.1833 6.82488C18.9337 6.23095 18.1698 5.47978 17.254 4.71282C19.1665 4.96898 20.8945 5.40982 22.4568 6.0173C23.2912 5.26162 21.9149 4.50556 21.2489 3.74988C24.2035 4.31185 25.4553 5.10213 26.6992 5.89317C27.6018 5.0254 26.7509 4.28777 26.1419 3.53247C28.3698 4.35999 29.5173 5.42863 30.7252 6.48334C31.1347 5.9289 31.7658 5.52229 31.0038 4.18471C32.5855 5.09912 33.7769 6.17678 34.6582 7.38421C35.6369 6.75906 35.2413 5.90445 35.2465 5.11642C36.8905 6.45776 37.9338 7.88524 39.2107 9.27887C39.4679 9.09079 39.6929 8.45398 39.892 7.44628C43.8134 11.2623 49.3548 20.8747 41.3163 24.6858C34.4752 19.0263 26.3047 14.9124 17.2503 11.8265L17.2529 11.825Z"
        fill="#75A928"
      />
      <path
        d="M79.0077 11.825C67.3707 17.8445 60.6045 22.7118 56.898 26.8592C58.7963 34.4909 68.6989 34.8392 72.3199 34.6252C71.5785 34.2791 70.9598 33.8642 70.7408 33.2274C71.6494 32.5797 74.871 33.1589 77.1199 31.8917C76.2559 31.7119 75.852 31.537 75.4478 30.8975C77.5729 30.2178 79.8619 29.6318 81.2078 28.5056C80.4814 28.5147 79.803 28.6689 78.8543 28.0087C80.7578 26.98 82.7888 26.1645 84.3668 24.5918C83.3824 24.5677 82.3215 24.582 82.0133 24.2191C83.7552 23.1365 85.2252 21.9328 86.4417 20.6159C85.0643 20.7826 84.483 20.6393 84.15 20.3985C85.4667 19.0455 87.1335 17.9032 87.9282 16.2361C86.9055 16.5897 85.9699 16.7251 85.2957 16.2053C85.743 15.1927 87.6604 14.5953 88.764 12.229C87.6878 12.334 86.5459 12.4645 86.3175 12.229C86.8182 10.1865 87.6754 9.03853 88.5162 7.84915C86.2125 7.81492 82.722 7.85818 82.8799 7.66296L84.3045 6.20276C82.0542 5.59528 79.7517 6.30055 78.0799 6.82415C77.3295 6.23022 78.093 5.47905 79.0088 4.71209C77.0967 4.96787 75.3683 5.40909 73.8064 6.01656C72.9717 5.26089 74.3483 4.50483 75.0143 3.74915C72.0597 4.31111 70.8079 5.1014 69.5637 5.89244C68.661 5.02466 69.5123 4.28704 70.1213 3.53174C67.8934 4.35926 66.7459 5.42789 65.538 6.48261C65.1282 5.92817 64.4974 5.52155 65.259 4.18398C63.6777 5.09839 62.4863 6.17605 61.605 7.38348C60.6263 6.75833 61.0219 5.90334 61.0167 5.11569C59.3727 6.45703 58.3294 7.88413 57.0525 9.27813C56.7953 9.09006 56.5703 8.45324 56.3712 7.44517C52.4498 11.2616 46.9084 20.874 54.9469 24.6851C61.7843 19.0241 69.9544 14.9109 79.0092 11.825H79.0077Z"
        fill="#75A928"
      />
      <path
        d="M62.2241 89.5366C62.2646 96.6581 56.0557 102.462 48.3566 102.499C40.6571 102.537 34.3826 96.7939 34.3421 89.6723C34.3417 89.6272 34.3417 89.5821 34.3421 89.5366C34.3016 82.4153 40.5101 76.6118 48.2096 76.5742C55.9091 76.5365 62.1832 82.2792 62.2241 89.4008V89.5366Z"
        fill="#BC1142"
      />
      <path
        d="M40.2167 52.701C45.9932 56.4974 47.0345 65.1022 42.5424 71.9202C38.0503 78.7386 29.726 81.1888 23.9495 77.3928C18.173 73.5963 17.132 64.9916 21.6238 58.1735C26.1159 51.3551 34.4402 48.9049 40.2167 52.701Z"
        fill="#BC1142"
      />
      <path
        d="M55.8078 52.0137C50.0317 55.8098 48.9903 64.4149 53.4821 71.233C57.9742 78.0514 66.2984 80.5016 72.0749 76.7051C77.8514 72.9091 78.8928 64.3043 74.4007 57.4859C69.9089 50.6679 61.5847 48.2177 55.8078 52.0137Z"
        fill="#BC1142"
      />
      <path d="M11.3463 58.9073C17.583 57.2305 13.452 84.7874 8.37746 82.5264C2.79559 78.0231 0.997835 64.835 11.3463 58.9073Z" fill="#BC1142" />
      <path d="M83.4191 58.564C77.1817 56.8876 81.3134 84.4456 86.3879 82.1845C91.9698 77.6809 93.7676 64.4914 83.4191 58.564Z" fill="#BC1142" />
      <path d="M62.2295 38.0425C72.9923 36.2197 81.9481 42.6337 81.5866 54.3402C81.2326 58.8284 58.2642 38.7109 62.2295 38.0425Z" fill="#BC1142" />
      <path d="M32.4917 37.699C21.7281 35.8759 12.7731 42.2914 13.1346 53.9971C13.4886 58.4849 36.4573 38.3675 32.4917 37.699Z" fill="#BC1142" />
      <path
        d="M47.9524 34.969C41.5287 34.8012 35.3637 39.751 35.3487 42.6221C35.3311 46.1105 40.4277 49.6824 47.9963 49.773C55.7251 49.8283 60.6571 46.9139 60.6818 43.3138C60.7103 39.2349 53.6524 34.9058 47.9524 34.9686V34.969Z"
        fill="#BC1142"
      />
      <path
        d="M48.3449 106.504C53.9455 106.259 61.4605 108.314 61.4755 111.04C61.5685 113.686 54.6599 119.666 47.9736 119.551C41.0489 119.851 34.2587 113.861 34.3476 111.785C34.2437 108.741 42.7791 106.365 48.3449 106.504Z"
        fill="#BC1142"
      />
      <path
        d="M27.6585 90.351C31.6459 95.1694 33.4639 103.635 30.1361 106.131C26.988 108.036 19.3429 107.251 13.9091 99.421C10.2443 92.8505 10.7164 86.1645 13.2896 84.2002C17.1375 81.8493 23.0828 85.0251 27.6589 90.351H27.6585Z"
        fill="#BC1142"
      />
      <path
        d="M68.2329 88.8235C63.9185 93.8921 61.5163 103.137 64.6633 106.115C67.6727 108.428 75.7509 108.104 81.7179 99.7995C86.0507 94.2216 84.599 84.9063 82.124 82.4328C78.4475 79.5804 73.1694 83.2309 68.2329 88.822V88.8235Z"
        fill="#BC1142"
      />
    </g>
    <defs>
      <clipPath id="clip0_225_9449">
        <rect fill="white" height="123" transform="translate(0 0.415039)" width="96" />
      </clipPath>
    </defs>
  </svg>
);

export default SVG;