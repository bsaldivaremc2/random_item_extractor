			$(function(){
				$('#btn').click(function(){
					var data = $('#input').val();

					var data_array = data.split(" ")
					if (data_array.length>1)
					{
						var samples_n = parseInt($('#input_number').val());
						var samples_total = data_array.length;
						var samples_draw = Math.min(samples_n,samples_total);
						var new_samples = []
						for (var _=0;_<samples_draw;_++)
						{
							var samples_total = data_array.length;
							var rand_pos = rand_int(start=0,end=samples_total);
							var d = data_array.splice(rand_pos,1);
							new_samples.push(d+"<br/>");
						}					
						$('#output').html(new_samples);
					}
					else
					{
						alert("Please insert valid sample string");
					}
					
				});
			});
			function rand_int(start=0,end=10)
			{
				return Math.floor(Math.random() * end) + start;  
			}