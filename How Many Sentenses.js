// The anagrams question is a bit tricky, but it's a good example of how to use
var words = ["bats", "tabs", "in", "cat", "act"];
var sentences = ["cat the bats", "in the act", "act tabs in"];
var count = new Array(sentences.length);

var map = new Map();
var mapToUse = new Map();
for (var word of words) {
  var charArr = word.split("");
  charArr.sort();
  var sorted = charArr.join("");

  if (map.get(sorted) != null) {
    var list = map.get(sorted);
    list.push(word);
    map.set(sorted, list);
    mapToUse.set(word, list);
  } else {
    var list = [];
    list.push(word);
    map.set(sorted, list);
    mapToUse.set(word, list);
  }
}
var index = 0;
for (var sentence of sentences) {
  var c = 1;
  var strArr = sentence.trim().split(" ");
  for (var str of strArr) {
    if (mapToUse.get(str) != null) {
      var list = mapToUse.get(str);
      c = c * list.length;
    }
  }
  count[index++] = c;
}

for (var i = 0; i < count.length; i++) {
  console.log(count[i] + " ");
}

//