privarr= []
namearr= []

def creategroup(user,privarr,namearr):
    namearr.append(user)
    privarr.append("Admin")
    return privarr,namearr;

def add(user,privarr,namearr,newuser):
    for k in range (len(privarr)):
        if namearr[k]==user:
            if privarr[k]=="Admin":
                namearr.append(newuser)
                privarr.append("Member")
            else: print('You do not have admin privileges')
        if k==len(namearr):
            print("User not found")


    #add member to group
def change(admin,newadmin,privarr,namearr):
    for k in range (len(privarr)):
        if namearr[k]==user:
            if privarr[k]=="Admin":
                for m in range (len((namearr))):
                    if namearr[m]==newadmin and privarr[m]=="Member":
                        privarr[m]="Admin"


            else: print('You do not have admin privileges')
        if k==len(namearr):
            print("User not found")

def remove(admin,kick,privarr,namearr):
    for k in range (len(namearr)):
        if namearr[k]==admin:
            if privarr[k]=="Admin":
                for m in range (len((namearr))):
                    if namearr[m]==kick:
                        if privarr[m]=="Admin":
                            print("Administrators cannot kick other administrators")
                        else:
                            privarr[m]=None
                            namearr[m]=None
            else: print('You do not have admin privileges')
        if k==len(namearr):
            print("User not found")



