var rx = Rx;

var keyUp = rx.Observable.fromEvent($('input'),'keyup');
var api = keyUp
		.map(x=>x.target.value)
		.debounceTime(2000)
		.distinctUntilChanged()
		.map(x=>{
			p = $.get('http://api.wunderground.com/api/50a65432f17cf542/conditions/q/France/'+$('#input').val()+'.json').promise();
			return rx.Observable.fromPromise(p)
					.retry(3)
					.takeUntil(keyUp);
		}).concatAll();

api.subscribe(
	x=>{console.log(x);
		//alert(x.current_observation.icon_url);
	$('body').html('<img src="'+x.current_observation.icon_url+'">')}
);

