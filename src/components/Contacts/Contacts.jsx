import Link from 'next/link';

export const Contacts = () => {
  return (
    <ul>
      <li className="flex justify-start items-center gap-[12px] xl:gap-[16px] mb-[16px] md:mb-[32px] xl:mb-[24px]">
        <p className="font-medium md:text-small xl:text-large">
          Phone:
          <Link
            href="tel:+380680619457"
            className="hover:text-white focus:fill-white duration-300"
            target="_blank"
          >
            &nbsp;+38 (068) 06 19 457
          </Link>
        </p>
        <ul className="flex gap-[8px] xl:gap-[12px]">
          <li>
            <Link
              href="https://t.me/+380680619457"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Telegram icon"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-black w-[12px] h-[12px] xl:w-[24px] xl:h-[24px] hover:fill-white focus:fill-white duration-300"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.4839 19.7902V19.7882L18.5019 19.7452L21.5009 4.62518V4.57718C21.5009 4.20018 21.3609 3.87118 21.0589 3.67418C20.7939 3.50118 20.4889 3.48918 20.2749 3.50518C20.0758 3.5232 19.8792 3.56345 19.6889 3.62518C19.6078 3.65133 19.5278 3.68069 19.4489 3.71318L19.4359 3.71818L2.71595 10.2772L2.71095 10.2792C2.66011 10.2965 2.61036 10.3169 2.56195 10.3402C2.44304 10.3936 2.32895 10.4572 2.22095 10.5302C2.00595 10.6782 1.59695 11.0262 1.66595 11.5782C1.72295 12.0362 2.03795 12.3262 2.25095 12.4772C2.37667 12.5653 2.51184 12.6391 2.65395 12.6972L2.68595 12.7112L2.69595 12.7142L2.70295 12.7172L5.62895 13.7022C5.61895 13.8852 5.63695 14.0722 5.68595 14.2572L7.15095 19.8162C7.23098 20.1192 7.40392 20.3895 7.64547 20.5892C7.88702 20.7889 8.18506 20.9079 8.49772 20.9296C8.81039 20.9512 9.12197 20.8743 9.38871 20.7098C9.65546 20.5453 9.86396 20.3013 9.98495 20.0122L12.2729 17.5662L16.2019 20.5782L16.2579 20.6022C16.6149 20.7582 16.9479 20.8072 17.2529 20.7662C17.5579 20.7242 17.7999 20.5962 17.9819 20.4512C18.1925 20.2805 18.3602 20.0631 18.4719 19.8162L18.4799 19.7992L18.4829 19.7932L18.4839 19.7902ZM7.13595 13.8752C7.11972 13.8135 7.12358 13.7483 7.14696 13.6889C7.17033 13.6296 7.21201 13.5792 7.26595 13.5452L17.1869 7.24518C17.1869 7.24518 17.7709 6.89018 17.7499 7.24518C17.7499 7.24518 17.8539 7.30718 17.5409 7.59818C17.2449 7.87518 10.4699 14.4162 9.78395 15.0782C9.7458 15.1152 9.71908 15.1624 9.70695 15.2142L8.60095 19.4342L7.13595 13.8742V13.8752Z"
                  fill="inherit"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="viber://contact?number=%2B380680619457"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Viber icon"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-black w-[12px] h-[12px] xl:w-[24px] xl:h-[24px]  hover:fill-white focus:fill-white duration-300"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.6761 2.62805C13.53 1.92477 10.2673 1.92477 7.12113 2.62805L6.78213 2.70305C5.89714 2.90091 5.08434 3.34023 4.434 3.97221C3.78366 4.60419 3.32124 5.40409 3.09813 6.28305C2.30062 9.42557 2.30062 12.7175 3.09813 15.86C3.3109 16.6983 3.74153 17.4654 4.34636 18.0836C4.95119 18.7018 5.70871 19.149 6.54213 19.38L7.00713 22.156C7.02197 22.2442 7.06017 22.3268 7.11776 22.3951C7.17535 22.4635 7.25021 22.5152 7.33455 22.5448C7.4189 22.5744 7.50963 22.5809 7.59732 22.5635C7.68501 22.5461 7.76644 22.5056 7.83313 22.446L10.5641 20.003C12.6142 20.1282 14.6717 19.9642 16.6761 19.516L17.0161 19.441C17.9011 19.2432 18.7139 18.8039 19.3643 18.1719C20.0146 17.5399 20.477 16.74 20.7001 15.861C21.4975 12.7185 21.4975 9.42658 20.7001 6.28405C20.4769 5.40496 20.0144 4.60498 19.3638 3.97298C18.7133 3.34099 17.9003 2.90174 17.0151 2.70405L16.6761 2.62805ZM7.96513 6.20205C7.77927 6.17499 7.58976 6.2124 7.42813 6.30805H7.41413C7.03913 6.52805 6.70113 6.80505 6.41313 7.13105C6.17313 7.40805 6.04313 7.68805 6.00913 7.95805C5.98913 8.11805 6.00313 8.28005 6.05013 8.43304L6.06813 8.44305C6.33813 9.23604 6.69013 9.99904 7.12013 10.717C7.67458 11.7255 8.35688 12.6582 9.15013 13.492L9.17413 13.526L9.21213 13.554L9.23513 13.581L9.26313 13.605C10.0999 14.4007 11.0347 15.0862 12.0451 15.645C13.2001 16.274 13.9011 16.571 14.3221 16.695V16.701C14.4451 16.739 14.5571 16.756 14.6701 16.756C15.0287 16.7295 15.368 16.5838 15.6341 16.342C15.9591 16.054 16.2341 15.715 16.4481 15.338V15.331C16.6491 14.951 16.5811 14.593 16.2911 14.35C15.7086 13.8411 15.0788 13.389 14.4101 13C13.9621 12.757 13.5071 12.904 13.3231 13.15L12.9301 13.646C12.7281 13.892 12.3621 13.858 12.3621 13.858L12.3521 13.864C9.62113 13.167 8.89213 10.402 8.89213 10.402C8.89213 10.402 8.85813 10.026 9.11113 9.83404L9.60313 9.43805C9.83913 9.24605 10.0031 8.79205 9.75013 8.34405C9.36373 7.67481 8.91257 7.04512 8.40313 6.46405C8.29202 6.32729 8.13619 6.23415 7.96313 6.20105L7.96513 6.20205ZM12.5791 5.00005C12.4465 5.00005 12.3193 5.05272 12.2256 5.14649C12.1318 5.24026 12.0791 5.36744 12.0791 5.50005C12.0791 5.63265 12.1318 5.75983 12.2256 5.8536C12.3193 5.94737 12.4465 6.00005 12.5791 6.00005C13.8441 6.00005 14.8941 6.41305 15.7251 7.20505C16.1521 7.63805 16.4851 8.15105 16.7031 8.71305C16.9221 9.27605 17.0221 9.87704 16.9961 10.479C16.9934 10.5447 17.0036 10.6103 17.0262 10.672C17.0487 10.7337 17.0832 10.7904 17.1277 10.8387C17.2176 10.9365 17.3425 10.9945 17.4751 11C17.6077 11.0056 17.7371 10.9583 17.8348 10.8684C17.9325 10.7786 17.9906 10.6537 17.9961 10.521C18.0271 9.78053 17.9042 9.04163 17.6351 8.35105C17.3649 7.65718 16.9551 7.02616 16.4311 6.49705L16.4211 6.48705C15.3901 5.50205 14.0851 5.00005 12.5791 5.00005ZM12.5451 6.64405C12.4125 6.64405 12.2853 6.69672 12.1916 6.79049C12.0978 6.88426 12.0451 7.01144 12.0451 7.14405C12.0451 7.27665 12.0978 7.40383 12.1916 7.4976C12.2853 7.59137 12.4125 7.64405 12.5451 7.64405H12.5621C13.4741 7.70905 14.1381 8.01305 14.6031 8.51205C15.0801 9.02605 15.3271 9.66504 15.3081 10.455C15.3051 10.5877 15.3548 10.716 15.4464 10.812C15.5381 10.9079 15.664 10.9635 15.7966 10.9665C15.9292 10.9696 16.0576 10.9198 16.1535 10.8282C16.2495 10.7366 16.3051 10.6107 16.3081 10.478C16.3321 9.44104 15.9981 8.54605 15.3361 7.83205V7.83005C14.6591 7.10405 13.7301 6.72005 12.6121 6.64505L12.5951 6.64305L12.5451 6.64405ZM12.5261 8.31905C12.4592 8.31314 12.3918 8.32078 12.3279 8.34151C12.264 8.36223 12.2049 8.39562 12.1542 8.43968C12.1035 8.48374 12.0622 8.53757 12.0328 8.59794C12.0033 8.65832 11.9864 8.72401 11.9829 8.79109C11.9794 8.85818 11.9894 8.92528 12.0124 8.98839C12.0354 9.0515 12.0709 9.10932 12.1168 9.15841C12.1626 9.2075 12.2179 9.24685 12.2793 9.2741C12.3407 9.30136 12.407 9.31596 12.4741 9.31705C12.8921 9.33905 13.1591 9.46504 13.3271 9.63405C13.4961 9.80405 13.6221 10.077 13.6451 10.504C13.6464 10.5711 13.6611 10.6373 13.6885 10.6986C13.7158 10.7599 13.7553 10.815 13.8044 10.8607C13.8535 10.9065 13.9113 10.9418 13.9744 10.9647C14.0375 10.9876 14.1045 10.9976 14.1716 10.994C14.2386 10.9905 14.3042 10.9735 14.3645 10.944C14.4248 10.9146 14.4785 10.8733 14.5226 10.8226C14.5666 10.7719 14.5999 10.7129 14.6206 10.6491C14.6413 10.5852 14.649 10.5179 14.6431 10.451C14.6111 9.85105 14.4231 9.32104 14.0381 8.93105C13.6511 8.54105 13.1241 8.35105 12.5261 8.31905Z"
                  fill="inherit"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="https://api.whatsapp.com/send?phone=380680619457"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Whatsapp icon"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-black w-[12px] h-[12px] xl:w-[24px] xl:h-[24px]  hover:fill-white focus:fill-white duration-300"
              >
                <path
                  d="M12.002 2C17.525 2 22.002 6.477 22.002 12C22.002 17.523 17.525 22 12.002 22C10.2347 22.0029 8.49862 21.5352 6.97197 20.645L2.00597 22L3.35797 17.032C2.46706 15.5049 1.99901 13.768 2.00197 12C2.00197 6.477 6.47897 2 12.002 2ZM8.59397 7.3L8.39397 7.308C8.26449 7.31589 8.13795 7.3499 8.02197 7.408C7.91349 7.46943 7.81446 7.54622 7.72797 7.636C7.60797 7.749 7.53997 7.847 7.46697 7.942C7.09709 8.4229 6.89794 9.01331 6.90097 9.62C6.90297 10.11 7.03097 10.587 7.23097 11.033C7.63997 11.935 8.31297 12.89 9.20097 13.775C9.41497 13.988 9.62497 14.202 9.85097 14.401C10.9544 15.3725 12.2692 16.073 13.691 16.447L14.259 16.534C14.444 16.544 14.629 16.53 14.815 16.521C15.1062 16.506 15.3906 16.4271 15.648 16.29C15.7789 16.2225 15.9067 16.1491 16.031 16.07C16.031 16.07 16.074 16.042 16.156 15.98C16.291 15.88 16.374 15.809 16.486 15.692C16.569 15.606 16.641 15.505 16.696 15.39C16.774 15.227 16.852 14.916 16.884 14.657C16.908 14.459 16.901 14.351 16.898 14.284C16.894 14.177 16.805 14.066 16.708 14.019L16.126 13.758C16.126 13.758 15.256 13.379 14.724 13.137C14.6683 13.1127 14.6086 13.0988 14.548 13.096C14.4795 13.089 14.4104 13.0967 14.3452 13.1186C14.28 13.1405 14.2203 13.1761 14.17 13.223C14.165 13.221 14.098 13.278 13.375 14.154C13.3335 14.2098 13.2763 14.2519 13.2108 14.2751C13.1452 14.2982 13.0743 14.3013 13.007 14.284C12.9418 14.2665 12.878 14.2445 12.816 14.218C12.692 14.166 12.649 14.146 12.564 14.11C11.99 13.8595 11.4587 13.5211 10.989 13.107C10.863 12.997 10.746 12.877 10.626 12.761C10.2326 12.3842 9.88969 11.958 9.60597 11.493L9.54697 11.398C9.50459 11.3342 9.47033 11.2653 9.44497 11.193C9.40697 11.046 9.50597 10.928 9.50597 10.928C9.50597 10.928 9.74897 10.662 9.86197 10.518C9.97197 10.378 10.065 10.242 10.125 10.145C10.243 9.955 10.28 9.76 10.218 9.609C9.93797 8.925 9.64797 8.244 9.34997 7.568C9.29097 7.434 9.11597 7.338 8.95697 7.319C8.90297 7.313 8.84897 7.307 8.79497 7.303C8.66067 7.29633 8.5261 7.29766 8.39197 7.307L8.59297 7.299L8.59397 7.3Z"
                  fill="inherit"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <p className="font-medium md:text-small xl:text-large">
          E-mail:
          <Link
            href="mailto:ambidexterschool@gmail.com"
            className="hover:text-white focus:fill-white duration-300"
            target="_blank"
          >
            &nbsp;ambidexterschool@gmail.com
          </Link>
        </p>
      </li>
    </ul>
  );
};
