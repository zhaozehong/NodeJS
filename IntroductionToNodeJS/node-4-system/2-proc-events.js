// A slight variation of sample found here:
// heep://nodejs.org/api/process.htm;#process_process_stdin

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk){
    process.stdout.write('Data! -> ' + chunk);
});

process.stdin.on('end', function(){
    process.stderr.write('End!\n');
});

process.stdin.on('SIGTERM', function(){
    process.stderr.write('SIGTERM!\n');
});


console.log('Node is running as process #' + process.pid);