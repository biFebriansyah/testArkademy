import re




def ganti_kata(words, oldWord, newWords):

    theWord = words

    regex = re.sub(oldWord, newWords, theWord)

    print(regex)





ganti_kata("theJakarta", "the", "d")
ganti_kata("purwakarta", 'a', 'o')