let nElements = [];
function onSubmit(event) {
	let words = document.getElementById("words").value;
	if (words === "") {
		return;
	}
	words = words.replace(/\s\s+/g, ' ');
	let toFast = false;
	if (event.submitter.id == "scramble_button") {
		event.preventDefault();
		let start = new Date();
		let theText = unscrambler(words);
		let time = "(Computed in:" + " " + (() => { if (((new Date() - start) / 1000) == 0) { toFast = true; return "so fast I couldn't count)"; } else { return (new Date() - start) / 1000; } })() + (() => { if (!toFast) { return "s)" } else { return "" } })();
		document.getElementById("p1").textContent = theText;
		document.getElementById("timerLable").textContent = time;
		document.getElementById("word").textContent = "Words: " + wordCounter(words);
		document.getElementById("char").textContent = "Characters: " + words.length;
		return false;
	} else if (event.submitter.id == "randomCase_button") {
		let startCase = new Date();
		let theRandomCase = randomCase(words);
		event.preventDefault();
		let time = "(Computed in:" + " " + (() => { if (((new Date() - startCase) / 1000) == 0) { toFast = true; return "so fast I couldn't count)"; } else { return (new Date() - startCase) / 1000; } })() + (() => { if (!toFast) { return "s)" } else { return "" } })();
		document.getElementById("timerLable").textContent = time;
		document.getElementById("word").textContent = "Words: " + wordCounter(words);
		document.getElementById("char").textContent = "Characters: " + words.length;
		document.getElementById("p1").textContent = theRandomCase;
		return false;
	} else if (event.submitter.id == "clear_button") {
		event.preventDefault();
		document.getElementById("p1").textContent = "Submit Input";
		return false;
	} else if (event.submitter.id == "sorting_button") {
		let theValueOut;
		let args = words.split(",");
		event.preventDefault();
		input = args[0];

		if (args[2] == "bench") {
			for (i = 1000; i <= 50000; i += 1000) {
				let start = new Date();
				let startRand = new Date();
				//randomize(0, 1000000, (() => {if(args[2] == 1){return args[1] * 10;} else {return args[1]}})(), nElements);
				let benching = false;
				randomize(0, 1000000, i, nElements);
				benching = true;
				let timeRand = (new Date() - startRand) / 1000;

				if (!benching) console.log(nElements);
				let startSort = new Date();

				let method;

				if (args[2] == 1 || args[2] == "bench") {
					let out = quiksort(nElements);
					casualHeapSort(out);
					method = "quiksort";
					if (!benching) console.log(out);
				} else if (args[2] == 3) {
					nElements.sort();
					console.log(nElements);
					method = "built in js sort";
				} else {
					let output = mergeSort(nElements);
					method = "casual merge sort";
					console.log(output);
				}
				let timeSort = (new Date() - startSort) / 1000;

				//console.log(input, args[1]);
				//max num 112813857
				if (!benching) console.log(sheach(input));
				console.log("Time total:", (new Date() - start) / 1000 + "s" + "\n" + "Time array gen:", timeRand + "s" + "\n" + "Time merge sort:", timeSort + "s" + "\n" + "Elements:", i, "Searched for:", input, "Algorithum used:", method);
			}
		} else {
			let start = new Date();

			let startRand = new Date();
			//randomize(0, 1000000, (() => {if(args[2] == 1){return args[1] * 10;} else {return args[1]}})(), nElements);
			let benching = false;
			if (args[2] == "bench") {
				randomize(0, 1000000, i, nElements);
				benching = true;
			} else {
				randomize(0, 1000000, args[1], nElements);
			}
			let timeRand = (new Date() - startRand) / 1000;

			if (!benching) console.log(nElements);
			let startSort = new Date();

			let method;

			if (args[2] == 1 || args[2] == "bench") {
				let out = quiksort(nElements);
				out = casualHeapSort(out);
				method = "quiksort";
				if (!benching) theValueOut = out;
			} else if (args[2] == 3) {
				nElements.sort();
				theValueOut = nElements;
				method = "built in js sort";
			} else if (args[2] == "heap") {
				theValueOut = casualHeapSort(nElements);
			} else if (args[2] == 4) {
				theValueOut = minMax(nElements);
				method = "min max pattern";
			} else if (args[2] == "4 sort") {
				theValueOut = minMaxSort(nElements);
				method = "min max pattern with sort";
			} else {
				let output = mergeSort(nElements);
				method = "casual merge sort";
				theValueOut = output;
			}
			let timeSort = (new Date() - startSort) / 1000;

			let searchResult;
			//console.log(input, args[1]);
			//max num 112813857
			if (!benching) searchResult = sheach(input);
			document.getElementById("p1").textContent = theValueOut.join(", ") + "<br />" + "<br />" + "Contains the number: " + searchResult + "<br />" + "<br />" + "Time total:" + " " + (new Date() - start) / 1000 + "s" + "<br />" + "Time array gen:" + " " + timeRand + "s" + "<br />" + "Time merge sort:" + " " + timeSort + "s" + "<br />" + "Elements:" + " " + args[1] + " " + "Searched for:" + " " + input + " " + "Algorithum used:" + " " + method;
			document.getElementById("bla").scrollIntoView();
		}
		return false;
	}
}
function bottomForm(event) {
	if (event.submitter.id == "back_to_top"){
		event.preventDefault();
		document.getElementById("title").scrollIntoView();
	} else if (event.submitter.id == "redirect"){
		event.preventDefault();
		window.location.href = "./astroTargetFinder";
	} else {
		event.preventDefault();
		window.location.href = "./MineSweeper";
	}
	return false;
}
function minMax(input) {
	let max = Number.MIN_SAFE_INTEGER;
	let min = Number.MAX_SAFE_INTEGER;
	let output = [];
	for (i = 0; i <= input.length - 1; i++) {
		if (input[i] > max) {
			max = input[i];
		} else if (input[i] < min) {
			min = input[i];
		}
	}
	output.push(max);
	output.push(min);
	max = Number.MIN_SAFE_INTEGER;
	min = Number.MAX_SAFE_INTEGER;
	let maxSuc = false;
	let minSuc = false;
	for (i = 0; i <= input.length - 1; i++) {
		if (input[i] > max && (() => { for (y = 0; y <= output.length - 1; y++) { if (output[y] == input[i]) { return false } else { return true; } } })() && !maxSuc) {
			max = input[i];
			maxSuc = true;
		} else if (input[i] < min && (() => { for (y = 0; y <= output.length - 1; y++) { if (output[y] == input[i]) { return false } else { return true; } } })() && !minSuc) {
			min = input[i];
			minSuc = true;
		}
		if (maxSuc && minSuc) {
			output.push(max);
			output.push(min);
			maxSuc = false;
			minSuc = false;
		}
	}
	return output;
}
function minMaxSort(input) {
	let final = mergeSort(input);
	final.splice(0, 0, final[final.length - 1]);
	final.splice(final.length - 1, 1)
	let y = 1;
	for (i = 2; i < final.length - 1; i += 2) {
		final.splice(i, 0, final[final.length - y])
		final.splice(final.length - y, 1)
		y++;
	}
	return final;
}
function wordCounter(input) {
	let tempArrCount = input.split(" ");
	return tempArrCount.length;
}
function unscrambler(input) {
	let superFinal = [];
	let tempArr = input.trim().split(" ");
	wordCount = tempArr.length;
	tempArr = tempArr.join(' ');
	tempArr = tempArr.split("");
	let z = -2;
	while (true) {
		let out = [];
		for (i = z + 2; i <= tempArr.length - 1; i++) {
			if (tempArr[i] == " ") {
				break;
			} else {
				out.push(tempArr[i]);
			}
		}
		let finished = [];
		y = 1
		for (i = out.length - 1; i >= 1; i--) {
			finished[y] = out[i]
			y++
		}
		finished[0] = out[0];
		for (i = 0; i <= finished.length - 1; i++) {
			if (i == 0) {
				superFinal.push(" ", finished[i]);
			} else {
				superFinal.push(finished[i])
			}
		}
		if (superFinal.length == tempArr.length + 1) {
			return wordtoOrder(superFinal);
		} else {
			z += out.length + 1;
		}
	}
}
function wordtoOrder(inputs) {
	let working = inputs.join('').split(" ");
	return working.reverse().join(' ');
}
function randomCase(input) {
	let rand = Math.round(Math.random() * 2);
	let inputArry = input.split("");

	for (i = 0; i <= inputArry.length - 1; i++) {
		if (rand == 1) {
			inputArry[i] = inputArry[i].toUpperCase();
			rand = Math.round(Math.random() * 2);
		} else {
			rand = Math.round(Math.random() * 2);
		}
	}
	return inputArry.join('');
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function randomize(min, max, length, n) {
	for (i = 0; i <= (length - 1); i++) {
		let rand = Math.floor(Math.random() * (max - min) + min);
		n[i] = rand;
	}
}

function casualHeapSort(n) {
	let output = [];
	let pivot = 0;
	let greatestIndex = Number.MIN_SAFE_INTEGER;
	let smallestIndex = Number.MAX_SAFE_INTEGER;
	let hasRestarted = false;
	for (i = 0; i <= n.length; i++) {
		let curIndex = n[i]
		if (curIndex >= greatestIndex) {
			greatestIndex = curIndex;
		} else if (curIndex <= smallestIndex) {
			smallestIndex = curIndex;
		}
	}
	output.push(greatestIndex);
	output.unshift(smallestIndex);
	if (pivot == greatestIndex || pivot == smallestIndex) {
		if (pivot < n.length - 1) {
			pivot++;
		}
	}
	if (pivot == 0) {
		output.splice(1, 0, n[pivot]);
	}
	let nLength = n.length - 1;
	while ((() => { for (i = 0; i <= (output.length - 1); i++) { if (output[i] > output[i + 1] || output.length !== n.length) { return true } } })()) {
		let y = output.length - 1;
		while (true) {
			if (n[nLength] <= output[y] && n[nLength] > output[y - 1] && !hasRestarted) {
				output.splice(y, 0, n[nLength]);
				//console.log("sorting", output);
				nLength--;
				break;
			} else if (n[nLength] == greatestIndex || n[nLength] == smallestIndex) {
				nLength--;
			} else {
				y--;
			}
		}
		//console.log(output);
		pivot = 1;
	}
	return output;
}

function quiksort(n) {
	let output = [];
	let hasRanOnce = false;
	let isLengthGood = false;
	let progress = 0;
	let hasSortedOne = false;
	let incrament = Math.floor((n.length - 1) / 10);
	do {
		let pivot = 0;

		let tempArray = [];
		function quiksortIn(progress) {
			pivot = progress;
			let it = progress;
			while ((() => {
				let weirdProg = (Math.floor((n.length - 1) / 10)) + progress;
				while (it <= (Math.floor((n.length - 1) / 10) + progress) && weirdProg < n.length) { return true }
			})()) {
				tempArray[it - progress] = n[it];
				it++;
			}
			while ((() => { for (i = 0; i <= (tempArray.length - 1); i++) { if (tempArray[i] > tempArray[i + 1]) { return true } } })()) {
				if (pivot + 1 <= (tempArray.length - 1) && tempArray[pivot] > tempArray[pivot + 1]) {
					let oldPivot = tempArray[pivot];
					tempArray[pivot] = tempArray[pivot + 1];
					tempArray[pivot + 1] = oldPivot;
				}
				if (pivot >= (tempArray.length - 1) && !hasSortedOne) {
					pivot = progress - 1;
				} else if (pivot >= (tempArray.length - 1) && hasSortedOne) {
					pivot = -1;
				}
				pivot++;
			}
			if (tempArray[0] >= output[output.length - 1]) {
				for (i = 0; i <= tempArray.length - 1; i++) {
					output.push(tempArray[i]);
				}
			} else if (tempArray[0] < output[output.length - 1]) {
				for (i = tempArray.length - 1; i >= 0; i--) {
					output.unshift(tempArray[i]);
				}
			} else {
				for (i = 0; i <= tempArray.length - 1; i++) {
					output.push(tempArray[i]);
				}
			}
			hasRanOnce = true;
			hasSortedOne = true;
		}
		if (hasRanOnce && progress <= n.length - incrament) {
			progress += incrament;
		}
		hasRanOnce = true;
		quiksortIn(progress);

		if (output.length == n.length) {
			isLengthGood = true;
		}
	} while ((() => { if (!isLengthGood) { for (i = 0; i <= (output.length - 1); i++) { if (output[i] > output[i + 1] || output.length == 1 || output.length !== n.length) { return true } } } })())
	return output;
}

function quiksort2(n) {
	let pivot = 0;
	while ((() => { for (i = 0; i <= (n.length - 1); i++) { if (n[i] > n[i + 1]) { return true } } })()) {
		if (pivot + 1 <= (n.length - 1) && n[pivot] > n[pivot + 1]) {
			let oldPivot = n[pivot];
			n[pivot] = n[pivot + 1];
			n[pivot + 1] = oldPivot;
			//console.log("sorting ?", pivot);
		}
		if (pivot >= (n.length - 1)) {
			pivot = -1;
		}
		//console.log(n);
		pivot++;
		//console.log(pivot);
	}
}

function mergeSort(arr) {
	if (arr.length == 1) {
		return arr;
	} else if (arr.length == 2) {
		if (arr[1] < arr[0]) {
			return [arr[1], arr[0]];
		}
		return arr;
	}
	let m = Math.floor(arr.length / 2);
	let l = mergeSort(arr.slice(0, m));
	let r = mergeSort(arr.slice(m, arr.length));

	let li = 0;
	let ri = 0;

	let output = [];

	while (li < l.length && ri < r.length) {
		if (l[li] < r[ri]) {
			output.push(l[li]);
			li++;
		} else {
			output.push(r[ri]);
			ri++;
		}
	}

	while (li < l.length) {
		output.push(l[li]);
		li++;
	}

	while (ri < r.length) {
		output.push(r[ri]);
		ri++;
	}
	return output;
}

function sheach(x) {
	let min = 0;
	let max = nElements.length - 1;
	if (x < nElements[0]) {
		return false;
	}
	while (max - min >= 0) {
		let middle = Math.floor((min + max) / 2);
		//console.log(min, middle, max);
		if (nElements[middle] == x) {
			return true;
		} else if (nElements[middle] > x) {
			max = middle - 1;
		} else {
			min = middle + 1;
		}
	}
	return false;
}