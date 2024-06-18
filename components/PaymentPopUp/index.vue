<template>
  <div class="popup">
    <form class="w-full max-w-lg">
      <h3>Payments Methods</h3>
      <button
        type="button"
        class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
      >
        <svg
          width="50"
          height="14"
          viewBox="0 0 50 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.00006 0.00195312H2.11098C1.84485 0.00195312 1.61852 0.195299 1.577 0.458021L0.00408279 10.4307C-0.0271937 10.6274 0.125207 10.8048 0.324808 10.8048H2.18149C2.44763 10.8048 2.67396 10.6115 2.71547 10.3482L3.13969 7.65843C3.18063 7.39514 3.40753 7.20179 3.67309 7.20179H4.90425C7.46607 7.20179 8.9446 5.96211 9.33072 3.50548C9.50473 2.43071 9.33811 1.58625 8.83485 0.994838C8.28211 0.345425 7.30173 0.00195312 6.00006 0.00195312ZM6.44874 3.64424C6.23606 5.03974 5.16981 5.03974 4.13883 5.03974H3.55197L3.96368 2.43356C3.98813 2.27604 4.12461 2.16003 4.28384 2.16003H4.55282C5.25511 2.16003 5.91761 2.16003 6.25994 2.56037C6.46409 2.79921 6.52664 3.15405 6.44874 3.64424Z"
            fill="#253B80"
          />
          <path
            d="M17.625 3.59788H15.7626C15.6039 3.59788 15.4669 3.71388 15.4424 3.8714L15.36 4.3923L15.2298 4.2035C14.8266 3.61835 13.9275 3.42273 13.0302 3.42273C10.9722 3.42273 9.21445 4.98143 8.87212 7.16794C8.69413 8.25864 8.94718 9.30156 9.56589 10.0289C10.1334 10.6976 10.9455 10.9763 11.9116 10.9763C13.5698 10.9763 14.4894 9.91003 14.4894 9.91003L14.4063 10.4275C14.3751 10.6254 14.5275 10.8028 14.7259 10.8028H16.4035C16.6702 10.8028 16.8954 10.6095 16.9375 10.3462L17.944 3.97206C17.9758 3.77587 17.824 3.59788 17.625 3.59788ZM15.029 7.22253C14.8493 8.2865 14.0049 9.00074 12.9278 9.00074C12.387 9.00074 11.9548 8.8273 11.6773 8.49861C11.4021 8.1722 11.2975 7.7076 11.385 7.19012C11.5528 6.13525 12.4115 5.39769 13.472 5.39769C14.0009 5.39769 14.4308 5.57341 14.714 5.90494C14.9978 6.23988 15.1103 6.70732 15.029 7.22253Z"
            fill="#253B80"
          />
          <path
            d="M27.5438 3.5979H25.6724C25.4938 3.5979 25.326 3.68661 25.2248 3.83503L22.6437 7.63711L21.5496 3.98345C21.4808 3.75485 21.2698 3.5979 21.0309 3.5979H19.1919C18.9684 3.5979 18.8132 3.81627 18.8842 4.02667L20.9456 10.0761L19.0076 12.8119C18.8552 13.0275 19.0088 13.3237 19.2721 13.3237H21.1413C21.3187 13.3237 21.4847 13.2373 21.5854 13.0917L27.81 4.10685C27.959 3.8919 27.806 3.5979 27.5438 3.5979Z"
            fill="#253B80"
          />
          <path
            d="M33.7404 0.000610352H29.8508C29.5852 0.000610352 29.3589 0.193956 29.3174 0.456678L27.7444 10.4293C27.7132 10.6261 27.8656 10.8035 28.064 10.8035H30.06C30.2454 10.8035 30.4041 10.6682 30.4331 10.4839L30.8795 7.65709C30.9204 7.3938 31.1473 7.20045 31.4129 7.20045H32.6435C35.2059 7.20045 36.6838 5.96077 37.0705 3.50414C37.2451 2.42937 37.0773 1.5849 36.5741 0.993496C36.0219 0.344083 35.0421 0.000610352 33.7404 0.000610352ZM34.1891 3.6429C33.977 5.03839 32.9107 5.03839 31.8792 5.03839H31.2929L31.7052 2.43221C31.7296 2.27469 31.865 2.15869 32.0248 2.15869H32.2937C32.9955 2.15869 33.6585 2.15869 34.0009 2.55902C34.205 2.79786 34.267 3.15271 34.1891 3.6429Z"
            fill="#179BD7"
          />
          <path
            d="M45.3644 3.59788H43.5031C43.3433 3.59788 43.2074 3.71388 43.1835 3.8714L43.1011 4.3923L42.9703 4.2035C42.5671 3.61835 41.6686 3.42273 40.7713 3.42273C38.7133 3.42273 36.9561 4.98143 36.6138 7.16794C36.4364 8.25864 36.6883 9.30156 37.307 10.0289C37.8756 10.6976 38.6866 10.9763 39.6527 10.9763C41.3109 10.9763 42.2305 9.91003 42.2305 9.91003L42.1474 10.4275C42.1162 10.6254 42.2686 10.8028 42.4682 10.8028H44.1452C44.4107 10.8028 44.637 10.6095 44.6786 10.3462L45.6857 3.97206C45.7164 3.77587 45.564 3.59788 45.3644 3.59788ZM42.7684 7.22253C42.5899 8.2865 41.7443 9.00074 40.6672 9.00074C40.1276 9.00074 39.6942 8.8273 39.4167 8.49861C39.1415 8.1722 39.038 7.7076 39.1244 7.19012C39.2933 6.13525 40.1509 5.39769 41.2114 5.39769C41.7403 5.39769 42.1702 5.57341 42.4534 5.90494C42.7383 6.23988 42.8509 6.70732 42.7684 7.22253Z"
            fill="#179BD7"
          />
          <path
            d="M47.5599 0.274095L45.9637 10.4293C45.9324 10.626 46.0848 10.8035 46.2833 10.8035H47.888C48.1547 10.8035 48.3811 10.6101 48.422 10.3468L49.9961 0.374749C50.0273 0.177991 49.8749 0 49.6765 0H47.8795C47.7208 0.000568663 47.5844 0.116576 47.5599 0.274095Z"
            fill="#179BD7"
          />
        </svg>

        BUY NOW
      </button>
      <button
        type="button"
        class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.4999 12.2733C23.5009 11.4556 23.4333 10.6393 23.2979 9.83337H12.2334V14.4549H18.5706C18.4409 15.193 18.1665 15.8966 17.7637 16.5233C17.361 17.15 16.8384 17.6868 16.2274 18.1014V21.1013H20.0095C22.224 19.013 23.4999 15.9248 23.4999 12.2733Z"
            fill="#4285F4"
          />
          <path
            d="M12.2318 23.9997C15.3979 23.9997 18.0638 22.9364 20.0079 21.1032L16.2257 18.1033C15.1731 18.8333 13.8173 19.2499 12.2318 19.2499C9.17152 19.2499 6.57405 17.14 5.64522 14.2968H1.74902V17.3883C2.72555 19.3757 4.22293 21.0464 6.07402 22.2139C7.9251 23.3813 10.057 23.9996 12.2318 23.9997Z"
            fill="#34A853"
          />
          <path
            d="M5.64551 14.2968C5.15447 12.8069 5.15447 11.1935 5.64551 9.70362V6.61206H1.74931C0.927829 8.28392 0.5 10.1291 0.5 12.0002C0.5 13.8713 0.927829 15.7165 1.74931 17.3883L5.64551 14.2968Z"
            fill="#FBBC04"
          />
          <path
            d="M12.2318 4.75037C13.9049 4.72241 15.5217 5.36898 16.7325 6.55031L20.0812 3.12543C17.9578 1.08563 15.1447 -0.034254 12.2318 0.000543143C10.057 0.000644515 7.9251 0.618945 6.07402 1.78642C4.22293 2.95389 2.72555 4.62458 1.74902 6.61197L5.64522 9.70353C6.57405 6.86029 9.17152 4.75037 12.2318 4.75037Z"
            fill="#EA4335"
          />
        </svg>
        Pay
      </button>

      <hr />
      <div class="relative">
        <input
          type="password"
          id="card-number-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="4242 4242 4242 4242"
          pattern="^4[0-9]{12}(?:[0-9]{3})?$"
          required
        />
        <div
          class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
        >
          <svg
            width="32"
            height="22"
            viewBox="0 0 32 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="21"
              rx="3.5"
              fill="white"
            />
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="21"
              rx="3.5"
              stroke="#F2F4F7"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 16.0118C14.8379 17.0172 13.3305 17.6242 11.6834 17.6242C8.00802 17.6242 5.02856 14.6023 5.02856 10.8746C5.02856 7.14689 8.00802 4.125 11.6834 4.125C13.3305 4.125 14.8379 4.73196 16 5.73739C17.1621 4.73196 18.6695 4.125 20.3166 4.125C23.992 4.125 26.9714 7.14689 26.9714 10.8746C26.9714 14.6023 23.992 17.6242 20.3166 17.6242C18.6695 17.6242 17.1621 17.0172 16 16.0118Z"
              fill="#ED0006"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 16.0118C17.4309 14.7738 18.3382 12.9317 18.3382 10.8746C18.3382 8.81752 17.4309 6.97538 16 5.73739C17.1621 4.73196 18.6695 4.125 20.3166 4.125C23.992 4.125 26.9714 7.14689 26.9714 10.8746C26.9714 14.6023 23.992 17.6242 20.3166 17.6242C18.6695 17.6242 17.1621 17.0172 16 16.0118Z"
              fill="#F9A000"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 16.0118C17.4309 14.7738 18.3382 12.9317 18.3382 10.8746C18.3382 8.81755 17.4309 6.97542 16 5.73743C14.5692 6.97542 13.6619 8.81755 13.6619 10.8746C13.6619 12.9317 14.5692 14.7738 16 16.0118Z"
              fill="#FF5E00"
            />
          </svg>
        </div>
      </div>

      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Select an option</label
      >
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Select an option</label
      >
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
      <div class="relative">
        <input
          type="password"
          id="card-number-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="424"
          pattern="^4[0-9]{12}(?:[0-9]{3})?$"
          required
        />
      </div>

      <button
        type="button"
        class="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        disabled
      >
        Disabled button
      </button>

      <button
        type="button"
        class="text-white bg-blue-400 dark:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        cancel
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  position: fixed;
  z-index: 999;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  display: flex;
  height: 100%;
  width: 100%;
  form {
    background: rgba(77, 94, 130, 1);
    border-radius: 15px;
    padding: 15px;
  }
}
</style>
