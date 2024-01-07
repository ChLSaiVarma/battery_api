const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(".batteryDisChargingTime");

//Battery API
//  console.log(navigator);

const battery=()=>{
   if('getBattery' in navigator){
     navigator.getBattery().then(battery=>{
        //Batery charging change
        function updateAll(){
          updateChargingInfo();
          updateLevelChange();
          dischargingLevelInfo();
          updateChargingTimeInfo();
        }
        updateAll();
         function updateChargingInfo(){
          const isCharging= battery.charging? 'Yes': 'No';
          batteryCharging.innerHTML=isCharging;          
         }
         function updateLevelChange(){
          batteryLevel.innerHTML=battery.level*100+'%';
         }
         function dischargingLevelInfo(){
          batteryDisChargingTime.innerHTML=battery.dischargingTime+" seconds";
         }
         function updateChargingTimeInfo(){
          batteryChargingTime.innerHTML=battery.chargingTime+" seconds";
         }
          battery.addEventListener('chargingchange',()=>{
            updateChargingInfo()
          });
           //battery level change
          battery.addEventListener('levelchange',()=>{
            updateLevelChange()
          });
        // time
        battery.addEventListener('chargingtimechange',()=>{
          updateChargingTimeInfo();
        });
        // 
        battery.addEventListener('dischargingtimechange',()=>{
          dischargingLevelInfo()
        });
     })
   }
};
battery();