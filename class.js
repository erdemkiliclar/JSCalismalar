class Personel{
    
    constructor(ad,soyad){
        this.ad = ad;
        this.soyad=soyad;
    }
    
    kaydet(){
        console.log("Personel kaydedildi." + this.ad);
    }

}

const personel = new Personel("Erdem","Kiliclar");

personel.kaydet();
console.log(personel.ad, personel.soyad)