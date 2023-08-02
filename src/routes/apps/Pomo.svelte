<script>
	let date = new Date();
	let time_locale = date.toLocaleTimeString();
	let date_locale = date.toLocaleDateString();
	
	const month_str = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	let days = [31,28,31,30,31,30,31,31,30,31,30,31];
	
	let millis = Date.now();
	let secs = millis/1000;
	let min = secs/60;
	let hour = min/60;
	let day = hour/24;

	//YEAR
	let year = 1970;
	while (day>365){
		let days_in_year = year%4==0?366:365;
		day-=days_in_year;
		year++;
	}
	if(year%4==0) days[1] = 29;
	//MONTH
	let month = 0;
	while(day>days[month]){
		day-=days[month];
		month++;
	}
	//HOUR
	hour = day*24;


</script>
<div class="w-[90vw] xl:w-[40vw] grow flex flex-col bord m-auto p-3" >
    <h3>Pomodoro<em class="red-txt">!!</em></h3>

    <p>
	{date_locale}<br>
	{time_locale} <br><br>
	{month_str[month] + " " + Math.ceil(day) + ", "+year}<br>
	{hour}<br>

    </p>

</div>
