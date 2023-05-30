function ShowTable(){
    let data = ['10:03', '28.04.2023', '27.04.2023', '26.04.2023', '25.04.2023', '24.04.2023',
                '21.04.2023', '20.04.2023', '19.04.2023', '18.04.2023', '17.04.2023', '14.04.2023',
                '13.04.2023', '12.04.2023', '11.04.2023', '10.04.2023', '07.04.2023', '06.04.2023',
                '05.04.2023', '04.04.2023', '03.04.2023'];
    let price = [31.55, 35.21, 35.46, 35.19, 35.61, 36.9, 36.48, 35.55, 34.51,
                 34.27, 34.31, 34.07, 33.82, 34.04, 33.9, 34.4, 34.54, 34.59, 34.2, 33.9, 32.09];

        let table = document.getElementById('Price');

        for (let i=0; i < data.length; i++){

            let tr = document.createElement('tr');
            let td = document.createElement('td');
            let td_1 = document.createElement('td');
            td.innerHTML = data[i];
            td_1.innerHTML = price[i];
            tr.appendChild(td);
            tr.appendChild(td_1);
            table.appendChild(tr);
        }
        document.body.appendChild(table);

        for (let i = 0; i < price.length; i++){

            let max = document.getElementById('Max'); //максимум
            max.innerHTML = (Math.max (...price));

            let min = document.getElementById('Min'); //минимум
            min.innerHTML = Math.min (...price);
        }

            let Sum = price.reduce(function(sum, elem){  // сумма элементов
                return sum + elem;
            }, 0 );

            average = Sum/price.length; //среднее значение


            let price_2 = price.map(i => (i - average)**2); // отклонение от среднего


            let variance = price_2.reduce(function(sum, elem){ // дисперсия
                return sum + elem;
            }, 0)/price_2.length;

           let StandDev = document.getElementById('StandDev');
           StandDev.innerHTML =  (Math.sqrt(variance)).toFixed(3); //корень дисперсии
}