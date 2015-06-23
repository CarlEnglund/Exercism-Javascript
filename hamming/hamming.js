var compute = function (input1, input2) {
    var count = 0;

    if (input1.length !== input2.length) {
        throw 'DNA strands must be of equal length.';
    }

    var index = -1;

    while (++index < input1.length) {
    	if(input1[index] !== input2[index]){
    		count++;
        }
    }

    return count;
}

exports.compute = compute;