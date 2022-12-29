// let _input = "";
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// process.stdin.on("data", (data) => (_input += data));
// process.stdin.on("end", () => main(_input));

function binarySearch(sizes, d, k) {
	if (sizes.length === 0) {
		return false;
	}
	let mid = Math.floor(sizes.length / 2);
	if (d - k <= sizes[mid] && sizes[mid] <= d + k) {
		return true;
	} else if (d + k < sizes[mid]) {
		return binarySearch(sizes.slice(0,mid), d, k);
	} else if (d - k > sizes[mid]) {
		return binarySearch(sizes.slice(mid + 1), d, k);
	} else {
		return false;
	}
}

function main(input) {
	// inputs = input.split("\n");
    // const [n, m, k] = inputs[0].split(' ').map(Number);
    // const desired = inputs[1].split(' ').map(Number);
    // const sizes = inputs[2].split(' ').map(Number);
	
    const [n, m, k] = [10,10,10];
    var desired = [90, 41, 20, 39, 49, 21, 35, 31, 74, 86];
    var sizes = [14, 24, 24, 7, 82, 85, 82, 4, 60, 95];
	
	desired.sort((a,b) => a - b);
	sizes.sort((a,b) => a - b);
	let ans = 0;
	let lastAccepted = null;
	for (let d of desired) {
		if (lastAccepted && lastAccepted - k < d && d < lastAccepted + k) {
			ans++;
			lastAccepted = d;
			continue;
		} else if (binarySearch(sizes, d, k)) {
			ans++;
			lastAccepted = d;
			// break;
		}
    }
	console.log(ans.toString());
}
main('');
/*	
10 10 10
90 41 20 39 49 21 35 31 74 86
14 24 24 7 82 85 82 4 60 95
*/