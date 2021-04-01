var NOTE = ["A_Flat", "A", "A_Sharp", "B_Flat", "B", "C", "C_Sharp", "D_Flat", "D", "D_Sharp",
    "E_Flat", "E", "F", "F_Sharp", "G_Flat", "G", "G_Sharp"];
var x;
var y;
console.log(NOTE);
function get_minor_triad(i) {
        if (i === "A") {
            x = fil(i);
            y = x.indexOf(i);
            console.log(i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
            return (i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
        }
        if (i === "B") {
            x = fil(i);
            y = x.indexOf(i);
            console.log(i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
            return (i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
        }
        if (i === "C") {
            x = fil(i);
            y = x.indexOf(i);
            console.log(i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
            return (i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
        }
        if (i === "D") {
            x = fil(i);
            y = x.indexOf(i);
            console.log(i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
            return (i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
        }
        if (i === "E") {
            x = fil(i);
            y = x.indexOf(i);
            console.log(i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
            return (i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
        }
        if (i === "F") {
            x = fil(i);
            y = x.indexOf(i);
            console.log(i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
            return (i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
        }
        if (i === "G") {
            x = fil(i);
            y = x.indexOf(i);
            if(x[y]===x[-1]){
              y=0;
            }
            console.log(i + " Chord is " + i + " " + x[y] + " " + x[y + 1]);
            return (i + " Chord is " + i + " " + x[y] + " " + x[y + 1]);
        }
        if (i === "A_Sharp") {
            x = fil(i);
            y = x.indexOf(i);
            console.log(i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
            return (i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
        }
        if (i === "G_Sharp") {
            x = fil(i);
            y = x.indexOf(i);
            if(x[y]===x[-1]){
              y=0;
            }
            console.log(i + " Chord is " + i + " " + x[y] + " " + x[y + 1]);
            return (i + " Chord is " + i + " " + x[y] + " " + x[y + 1]);
        }
        if (i === "F_Sharp") {
            x = fil(i);
            y = x.indexOf(i);
            console.log(i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
            return (i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
        }
        if (i === "C_Sharp") {
            x = fil(i);
            y = x.indexOf(i);
            console.log(i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
            return (i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
        }
        if (i === "D_Sharp") {
            x = fil(i);
            y = x.indexOf(i);
            console.log(i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
            return (i + " Chord is " + i + " " + x[y + 1] + " " + x[y + 2]);
        }
}
function fil(i) {
    var l = i.length;
    var n = NOTE.filter(word => word.length === l);
    console.log(n);
    return n;
}

get_minor_triad('A');

