import re



def findSame(array) :

    if(isinstance(array, list) is not True) :
        print("Parameter Harus array")
        return

    txt = ",".join(array)
    hasil = []

    for i in array :

        tst = "Masuk array"
        print(tst)

        test = r"[" + re.escape(i) + "]{3,}"
        regex = re.findall(test, txt)

        if(len(regex) is 1) :
            tst = "Continue"
            print(tst)
            continue

        hasil = regex

        print("Hasil ",hasil)
        print("Reges ",regex)





theAray = ['cat', 'listen', 'code', 'act', 'silent', 'tac']

txt = "aku kamu"

findSame(theAray)
    