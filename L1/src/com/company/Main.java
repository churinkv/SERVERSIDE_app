<<<<<<< HEAD
package product;

import java.util.Date;

public class Main {

    public static void main(String[] args) {

        product[] prod = new product[4];
        prod[0] = new product(1, "Djankoyskoe_moloko_1litr", "SL0001", "Jankoy-Mol-zavod", 50, new Date(2020, 9, 9), 3);
        prod[1] = new product(2, "Crymskiy_molochnik_1litr", "GX0002", "Gvardeyskoe-zavod", 50,new Date(2020, 5, 6), 4);
        prod[2] = new product(3, "Smetana_1kg", "CK0003", "Baxchisaray-MLZ",45, new Date(2020, 6, 19), 2);
        prod[3] = new product(4, "Saxar_1kg", "LA0004", "Svecla-Trexprudnoe-company", 24, new Date(1988, 11, 19), 3);

        Date p=new Date(2020, 9, 9);

        for (int i = 0; i <= 3; i++) {
            prod[i].show();
        }
//вывод на екран
        System.out.println();
        for (int i = 0; i <= 3; i++) {
            prod[i].spis();
        }
        System.out.println();
        for (int i = 0; i <= 3; i++) {
            prod[i].tovcena();
        }
        System.out.println();
        for (int i = 0; i <= 3; i++) {
            prod[i].srokxr(p);
        }


        // TODO code application logic here


    }
}
// создаем класс
class product {

    public int id;
    public String name;
    public String upc;
    public String proizvoditel;
    public int cena;
    public Date srok_xraneniya;
    public int kolichestvo;

    public product() {
    }

    public product(int id, String name, String UPC, String proizvoditel, Date srok_xraneniya, int kolichestvo) {
        this.id = id;
        this.name = name;
        this.upc = upc;
        this.proizvoditel = proizvoditel;
        this.cena = cena;
        this.srok_xraneniya = srok_xraneniya;
        this.kolichestvo = kolichestvo;
    }


    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUpc() {
        return upc;
    }

    public String getProizvoditel() {
        return proizvoditel;
    }

    public int getCena() {
        return cena;
    }


    public void setSrok_xraneniya (Date srok_xraneniya) {
        this.srok_xraneniya= new Date(2020, 9, 9);
    }


    public void setId(int id) {
        this.id = id;
    }

    public void setKolichestvo (int kolichestvo) {
        this.kolichestvo = kolichestvo;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void show() {
        System.out.println("id: " + getId());
        System.out.println("Nazvanie_tovara: " + getName());
        System.out.println("UPC_code: " + getUpc());
        System.out.println("srok_xraneniya: " + getSrok_xraneniya getYear()+"."+getSrok_xraneniya ().getMonth()+"."+getSrok_xraneniya().getDay());
        System.out.println("Proizvoditel_tovara: " + getProizvoditel());
        System.out.println("Cena_tovara: " + getCena());
        System.out.println("Kolichestvo_tovara: " + getKolichestvo());

    }
    //список товаров заданного производителя
    public void spis() {
        if ((this.getName()).equals("Djankoyskoe_moloko_1litr")) {
            System.out.println("id: " + getId());
            System.out.println("UPC_code: " + getUpc());
            System.out.println("srok_xraneniya: " + getSrok_xraneniya getYear()+"."+getSrok_xraneniya ().getMonth()+"."+getSrok_xraneniya().getDay());
            System.out.println("Proizvoditel_tovara: " + getProizvoditel());
            System.out.println("Cena_tovara: " + getCena());
            System.out.println("Kolichestvo_tovara: " + getKolichestvo());

        }

    }
    //найти заданные товары с ценой
    public void tovcena() {
        if (((this.getName()).equals("Crymskiy_molochnik_1litr")) && (this.getCena() == 50)) {
            System.out.println("id: " + getId());
            System.out.println("UPC_code: " + getUpc());
            System.out.println("srok_xraneniya: " + getSrok_xraneniya getYear()+"."+getSrok_xraneniya ().getMonth()+"."+getSrok_xraneniya().getDay());
            System.out.println("Proizvoditel_tovara: " + getProizvoditel());
            System.out.println("Kolichestvo_tovara: " + getKolichestvo());
        }
    }
    //список товаров, срок хранения которых после заданного
    public void srokxr(Date p){
        if ((this.getSrok_xraneniya ().getMonth()) > (p.getMonth())){
            System.out.println("id: " + getId());
            System.out.println("Nazvanie_tovara: " + getName());
            System.out.println("UPC_code: " + getUpc());
            System.out.println("srok_xraneniya: " + getSrok_xraneniya getYear()+"."+getSrok_xraneniya ().getMonth()+"."+getSrok_xraneniya().getDay());
            System.out.println("Proizvoditel_tovara: " + getProizvoditel());
            System.out.println("Cena_tovara: " + getCena());
            System.out.println("Kolichestvo_tovara: " + getKolichestvo());
        }
    }
=======
package product;

import java.util.Date;

public class Main {

    public static void main(String[] args) {

        product[] prod = new product[4];
        prod[0] = new product(1, "Djankoyskoe_moloko_1litr", "SL0001", "Jankoy-Mol-zavod", 50, new Date(2020, 9, 9), 3);
        prod[1] = new product(2, "Crymskiy_molochnik_1litr", "GX0002", "Gvardeyskoe-zavod", 50,new Date(2020, 5, 6), 4);
        prod[2] = new product(3, "Smetana_1kg", "CK0003", "Baxchisaray-MLZ",45, new Date(2020, 6, 19), 2);
        prod[3] = new product(4, "Saxar_1kg", "LA0004", "Svecla-Trexprudnoe-company", 24, new Date(1988, 11, 19), 3);

        Date p=new Date(2020, 9, 9);

        for (int i = 0; i <= 3; i++) {
            prod[i].show();
        }
//вывод на екран
        System.out.println();
        for (int i = 0; i <= 3; i++) {
            prod[i].spis();
        }
        System.out.println();
        for (int i = 0; i <= 3; i++) {
            prod[i].tovcena();
        }
        System.out.println();
        for (int i = 0; i <= 3; i++) {
            prod[i].srokxr(p);
        }


        // TODO code application logic here


    }
}
// создаем класс
class product {

    public int id;
    public String name;
    public String upc;
    public String proizvoditel;
    public int cena;
    public Date srok_xraneniya;
    public int kolichestvo;

    public product() {
    }

    public product(int id, String name, String UPC, String proizvoditel, Date srok_xraneniya, int kolichestvo) {
        this.id = id;
        this.name = name;
        this.upc = upc;
        this.proizvoditel = proizvoditel;
        this.cena = cena;
        this.srok_xraneniya = srok_xraneniya;
        this.kolichestvo = kolichestvo;
    }


    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUpc() {
        return upc;
    }

    public String getProizvoditel() {
        return proizvoditel;
    }

    public int getCena() {
        return cena;
    }


    public void setSrok_xraneniya (Date srok_xraneniya) {
        this.srok_xraneniya= new Date(2020, 9, 9);
    }


    public void setId(int id) {
        this.id = id;
    }

    public void setKolichestvo (int kolichestvo) {
        this.kolichestvo = kolichestvo;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void show() {
        System.out.println("id: " + getId());
        System.out.println("Nazvanie_tovara: " + getName());
        System.out.println("UPC_code: " + getUpc());
        System.out.println("srok_xraneniya: " + getSrok_xraneniya getYear()+"."+getSrok_xraneniya ().getMonth()+"."+getSrok_xraneniya().getDay());
        System.out.println("Proizvoditel_tovara: " + getProizvoditel());
        System.out.println("Cena_tovara: " + getCena());
        System.out.println("Kolichestvo_tovara: " + getKolichestvo());

    }
    //список товаров заданного производителя
    public void spis() {
        if ((this.getName()).equals("Djankoyskoe_moloko_1litr")) {
            System.out.println("id: " + getId());
            System.out.println("UPC_code: " + getUpc());
            System.out.println("srok_xraneniya: " + getSrok_xraneniya getYear()+"."+getSrok_xraneniya ().getMonth()+"."+getSrok_xraneniya().getDay());
            System.out.println("Proizvoditel_tovara: " + getProizvoditel());
            System.out.println("Cena_tovara: " + getCena());
            System.out.println("Kolichestvo_tovara: " + getKolichestvo());

        }

    }
    //найти заданные товары с ценой
    public void tovcena() {
        if (((this.getName()).equals("Crymskiy_molochnik_1litr")) && (this.getCena() == 50)) {
            System.out.println("id: " + getId());
            System.out.println("UPC_code: " + getUpc());
            System.out.println("srok_xraneniya: " + getSrok_xraneniya getYear()+"."+getSrok_xraneniya ().getMonth()+"."+getSrok_xraneniya().getDay());
            System.out.println("Proizvoditel_tovara: " + getProizvoditel());
            System.out.println("Kolichestvo_tovara: " + getKolichestvo());
        }
    }
    //список товаров, срок хранения которых после заданного
    public void srokxr(Date p){
        if ((this.getSrok_xraneniya ().getMonth()) > (p.getMonth())){
            System.out.println("id: " + getId());
            System.out.println("Nazvanie_tovara: " + getName());
            System.out.println("UPC_code: " + getUpc());
            System.out.println("srok_xraneniya: " + getSrok_xraneniya getYear()+"."+getSrok_xraneniya ().getMonth()+"."+getSrok_xraneniya().getDay());
            System.out.println("Proizvoditel_tovara: " + getProizvoditel());
            System.out.println("Cena_tovara: " + getCena());
            System.out.println("Kolichestvo_tovara: " + getKolichestvo());
        }
    }
>>>>>>> 904a27291ca0aec6c9f48060a99d77942ef46c30
