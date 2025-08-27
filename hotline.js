
      function getElement(id) {
        const element = document.getElementById(id);
        return element;
      }
      // for heart functionality
      const heartImgs= document.getElementsByClassName("heart");
      for(const heartImg of heartImgs ){
            heartImg.addEventListener("click", function(){
                const heartCount= getElement("heart-count").innerText;
                const  totalHeartCount=Number(heartCount)+1;
                getElement("heart-count").innerText=totalHeartCount;
                
            })
      }

      // for call functionality
      const cardBtns = document.getElementsByClassName("card-btn");
      for (const cardBtn of cardBtns) {
        cardBtn.addEventListener("click", function () {
          const coinCount = getElement("coin-count").innerText;
          const title = cardBtn.parentNode.parentNode.children[0].innerText;
          const subTitle = cardBtn.parentNode.parentNode.children[1].innerText;
          const number = cardBtn.parentNode.parentNode.children[2].innerText;
         
          if (coinCount > 0) {
            const TotalCoinCount = parseInt(coinCount) - 20;
            getElement("coin-count").innerText = TotalCoinCount;
             alert(` calling ${subTitle} ${number}` )
             const historyCardContainer = getElement("history-card");
          const historyCard = document.createElement("div");
          historyCard.innerHTML= `<div
          class="history-card flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-3 m-4 rounded-xl bg-[#FAFAFA]"
        >
          <div class="title">
            <h1 class="text-sm md:text-base font-semibold">
            ${title}
            </h1>
            <p class="text-gray-500 text-xs md:text-sm"><span>${number}</span></p>
          </div>
          <div class="time mt-2 sm:mt-0">
            <h1 class="text-xs md:text-sm text-gray-600">${new Date().toLocaleTimeString()}</h1>
          </div>
        </div>`
        historyCardContainer.append(historyCard)
          } else {
            alert("Insufficient coins");
          }
        });
      }

      // for copy functionality
      const copyBtns = document.getElementsByClassName("copy-btn");
      for (const copyBtn of copyBtns) {
        copyBtn.addEventListener("click", function () {
          const number =
            copyBtn.parentNode.parentNode.children[2].innerText;
          navigator.clipboard.writeText(number);
          const copyCount = getElement("copy-count").innerText;
          alert(`নম্বরটি কপি করা হয়েছে ${number} `);
          
          const TotalCopyCount = parseInt(copyCount) + 1;
          getElement("copy-count").innerText = TotalCopyCount;
        });
      }
      
 