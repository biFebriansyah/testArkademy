import re



def findSame(array) :

    if(isinstance(array, list) is not True) :
        print("Parameter Harus array")
        return

    txt = ",".join(array)
    hasil = ""

    for i in array :

        test = r"[" + re.escape(i) + "]{3,}"
        regex = re.findall(test, txt)

        if(len(regex) is 1) :
            continue


        if(regex[0] != hasil) :

            print(hasil + "-"+ regex[0])
            hasil = regex[0]
            # print(regex)








theAray = ['cat', 'listen', 'code', 'act', 'silent', 'tac']

txt = "aku kamu"

findSame(theAray)
    