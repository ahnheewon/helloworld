






// 등록버튼 클릭.
		
		let addBtn = document.getElementById('addBtn');
		addBtn.addEventListener('click', addBoardFnc);

		// 서버상에 있는 html, jsp, 서블릿. text
		let xhtp = new XMLHttpRequest();
		xhtp.open('get', './board');
		xhtp.send(); // 서버요청.

		xhtp.onload = function () {
			let data = JSON.parse(xhtp.response);
			console.log(data);

			let list = document.getElementById('list');
			// 서버의 json 파일 -> JSON.parse() -> 페이지 출력.
			data.forEach(data => {
				let tr = makeTr(data);
				list.append(tr);
			})
		}

checkboxes.forEach((checkbox) => {   checkbox.checked = selectAll.checked; })
		
		function makeTr(data) {
			// tr 생성하는 부분.
			console.log(data);
			let tr = document.createElement('tr');

			let td0 = document.createElement('td');
			chk = document.createElement('input');
			chk.type = 'checkbox'; 
			td0.appendChild(chk); //chk
			
			let td1 = document.createElement('td');
			let txt = document.createTextNode(data.bno);
			td1.appendChild(txt); // bno

			let td2 = document.createElement('td');
			let txt2 = document.createTextNode(data.title);
			td2.appendChild(txt2); // title

			let td3 = document.createElement('td');
			let txt3 = document.createTextNode(data.content);
			td3.appendChild(txt3); // content
			
			let td4 = document.createElement('td');
			let txt4 = document.createTextNode(data.writer);
			td4.appendChild(txt4); // writer
			
			let td5 = document.createElement('td');
			let txt5 = document.createTextNode(data.creation_date);
			td5.appendChild(txt5); // creationDate

			let td6 = document.createElement('td');
			let btn = document.createElement('button');
			
			
			// 삭제이벤트 : ajax 호출.
			btn.addEventListener('click', function () {
				let delAjax = new XMLHttpRequest();
				delAjax.open('post', './board');
				delAjax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				delAjax.send('&delete=delete');
				delAjax.onload = function (e) {
					let result = delAjax.responseText;
					console.log(result);
					if (result == 'success') {
						btn.parentElement.parentElement.remove();
					} else {
						alert('처리중 에러발생.');
					}
				}
			})
			let txt6 = document.createTextNode('삭제');
			btn.append(txt6);
			td6.append(btn);
			
			tr.append(td0,td1, td2, td3, td4, td5,td6);
			
			return tr;
			}

			
			
			// 등록버튼 클릭 실행 콜백함수.
		function addBoardFnc() {
			
			// 사용자 값을 읽어와야함.
			let bno = document.getElementById('bno').value; // input값 value.
			let title = document.getElementById('title').value;
			let con = document.getElementById('content').value;
			let wr = document.getElementById('writer').value;
			let date = document.getElementById('creationDate').value;
			let param = '&bno=' + bno + '&title=' + title + '&con=' + con +'&wr='+wr +'&creationDate'+date+'&job=insert';

			// 등록하는 서블릿 호출.
			let addAjx = new XMLHttpRequest();
			addAjx.open('post', './board');
			addAjx.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			addAjx.send(param);
			addAjx.onload = addBoardCallback;
		}

		// 등록 ajax 콜백함수.
		function addBoardCallback() {
			let result = JSON.parse(this.responseText);
			console.log(result);
			if (result.retCode == 'success') {
				let list = document.getElementById('list');
				list.append(makeTr(result));
			} else if (result.retCode == 'fail') {
				alert('처리중 에러발생.')
			}
		}
			