# ProiectCloudComputing
Documentatie Proiect Cloud Computing
Petreanu Andreea-Theodora,grupa 1118

Cloud computing este un concept modern în domeniul computerelor și informaticii, reprezentând un ansamblu distribuit de servicii de calcul, aplicații, acces la informații și stocare de date, fără ca utilizatorul să aibă nevoie să cunoască amplasarea și configurația fizică a sistemelor care furnizează aceste servicii. Pentru cloud computing încă nu există un nume românesc încetățenit.
Expresia cloud computing derivă dintr-o reprezentare grafică simbolică a Internetului des întâlnită în formă de nor („the cloud”), folosită atunci când detaliile tehnice ale Internetului pot fi ignorate, ca în imaginea din dreapta. Conceptul și termenul englez au apărut în practică prin anii 2006-2007.
Conexiunea permanentă a utilizatorului la Internet a devenit foarte răspândită, astfel încât acum aproape toate resursele disponibile se pot plasa în Internet și partaja, uneori chiar între utilizatori complet independenți unii de alții: software (programele) și datele/informațiile sunt aduse din Internet pe calculatorul utilizatorului la cerere (on demand), ca și cum ar fi vorba de servicii publice banale precum apa sau energia electrică.
Executarea aplicațiilor de computer online în Internet, și nu pe stația de lucru (workstation) proprie, reprezintă o nouă schimbare de paradigmă, urmașă a celei din anii 1980, când s-a trecut de la mainframes la conceptul client-server. Dacă interfața pusă la dispoziție de furnizorul (provider) de cloud computing este de bună calitate, atunci utilizatorul e eliberat de sarcina de a fi un expert în tehnologia și infrastructura folosite. De exemplu, el nu mai trebuie să-și actualizeze software-ul, deoarece aceasta se face central, la furnizor. 
Cloud computing folosește noi metode de oferire și consumare a serviciilor IT în Internet, servicii care de obicei pot fi dimensionate dinamic și care includ resurse virtualizate. Este de fapt doar o posibilitate secundară, urmare a ușurinței cu care se pot acum accesa toate serverele și centrele de calcul interconectate prin intermediul Internetului.  
Furnizorii tipici de cloud computing pun la dispoziție, de exemplu, aplicații comerciale standard; utilizatorul are acces la acestea doar prin intermediul unui browser local, deoarece atât aplicația cât și datele proprii ale utilizatorului sunt găzduite în cloud, pe serverul furnizorului de servicii. În aceste condiții asigurarea confidențialității și drepturilor de acces la date în contextul Internetului atotprezent joacă un rol primordial.
Deseori furnizorii de clouds prevăd și servicii suplimentare, consolidând toate ofertele lor, pentru toți clienții lor, într-o singur loc.Ofertele comerciale trebuie în general să îndeplinească standardele de calitate cerute de clienți, ca de ex. așa numitele Service Level Agreements (SLA) și altele. 

  


Descrierea Problemei
Am realizat o aplicatie care foloseste platforma Google Cloud pentru crearea unei instante SQL, cu ajutorul careia am create o baza de date in MySQL. 

Instanta in Google Cloud
![instanta](https://user-images.githubusercontent.com/72292316/168495538-9cd7bf5c-f5f3-40b1-adb0-f78f38191ce9.png)

Exemple de request/response:
Obtinerea tuturor grupurilor din baza de date (VS Code)

router.get('/',(req,res) => {
    connection.query("SELECT * FROM GROUPCHATS", (err,results) => {
        if(err){
            console.log(err);
            return res.send(err);
        }

        return res.json({
            contacts:results,
        })

    })

});

Rezultatul obtinut in Postman
![image](https://user-images.githubusercontent.com/72292316/168495610-ae39704f-2d9b-4c52-b529-47b2de56068b.png)

Crearea si popularea tabelelor
![image](https://user-images.githubusercontent.com/72292316/168495720-3f26720d-a9ae-4f19-97e3-cc8c6b529c26.png)

![image](https://user-images.githubusercontent.com/72292316/168495724-bb4a8aa2-e9e8-4127-9e96-c196df829945.png)

 
Referinte
https://ro.wikipedia.org/wiki/Cloud_computing

