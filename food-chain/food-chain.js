exports.verse  = verse;
exports.verses = verses;

function verses(first, second) {
 var distance = second-first;
 var expected = "";
 for(var i = first; i <= second; i++)
  expected += verse(i) + "\n";

 return expected;
}

function verse(number) {
  switch(number) {
    case 1:
      return "I know an old lady who swallowed a fly.\nI don't know why she swallowed the fly. Perhaps she'll die.\n";
    case 2:
      return "I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n" +
             "She swallowed the spider to catch the fly.\n" + "I don't know why she swallowed the fly. Perhaps she'll die.\n";
    case 3:
      return "I know an old lady who swallowed a bird.\n" +
             "How absurd to swallow a bird!\n" +
             "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
             "She swallowed the spider to catch the fly.\n" +
             "I don't know why she swallowed the fly. Perhaps she'll die.\n";
    case 4:
      return "I know an old lady who swallowed a cat.\n" +
             "Imagine that, to swallow a cat!\n" +
             "She swallowed the cat to catch the bird.\n" +
             "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
             "She swallowed the spider to catch the fly.\n" +
             "I don't know why she swallowed the fly. " +
             "Perhaps she'll die.\n";
    case 5:
      return "I know an old lady who swallowed a dog.\n" +
             "What a hog, to swallow a dog!\n" +
             "She swallowed the dog to catch the cat.\n" +
             "She swallowed the cat to catch the bird.\n" +
             "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
             "She swallowed the spider to catch the fly.\n" +
             "I don't know why she swallowed the fly. " +
             "Perhaps she'll die.\n";
    case 6:
      return  "I know an old lady who swallowed a goat.\n" +
              "Just opened her throat and swallowed a goat!\n" +
              "She swallowed the goat to catch the dog.\n" +
              "She swallowed the dog to catch the cat.\n" +
              "She swallowed the cat to catch the bird.\n" +
              "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
              "She swallowed the spider to catch the fly.\n" +
              "I don't know why she swallowed the fly. " +
              "Perhaps she'll die.\n";
    case 7:
      return  "I know an old lady who swallowed a cow.\n" +
              "I don't know how she swallowed a cow!\n" +
              "She swallowed the cow to catch the goat.\n" +
              "She swallowed the goat to catch the dog.\n" +
              "She swallowed the dog to catch the cat.\n" +
              "She swallowed the cat to catch the bird.\n" +
              "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
              "She swallowed the spider to catch the fly.\n" +
              "I don't know why she swallowed the fly. " +
              "Perhaps she'll die.\n";
    case 8:
      return  "I know an old lady who swallowed a horse.\n" + "She's dead, of course!\n";
  }
}

