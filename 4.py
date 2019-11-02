import re



def findSame(array) :

    if isinstance(array, list) is not True :
        print("Parameter Harus array")
        return

    txt = ",".join(array)

        
    for i in array :

        patren = r"[" + re.escape(i) + "]{3,}"
        regex = re.findall(patren, txt)


        if len(regex) is 1:
            continue
            
        print(i + ":", regex)






theAray = ['cat', 'listen', 'code', 'act', 'silent', 'tac']

findSame(theAray)

    