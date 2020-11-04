import java.util.*;

public class TestInsura {
    private static List<Insura> derivative;

    public static void main(String[] args) {
        derivative = new ArrayList<>();
        fillderivative(derivative);
        //сортировку обязательств в деривативе на
       // основе уменьшения степени риска (range)
        Comparator<Insura> InsuraComparator = new Comparator<Insura>() {
            @Override
            public int compare(Insura o1, Insura o2) {
                return Integer.compare(o2.getRange(), o1.getRange()); //* (-1) ; izmsort
            }
        };

        NavigableMap<Insura> Insuramap = new TreeMap<Insura>() {
            Insuramap.put(0, 0);
            Insuramap.put(5, 1);
            Insuramap.put(11, 2);
            if (key < 0 || key > 200) {

            } else{
                return Insuramap.floorEntry(key).getValue()
            }
        };




        Collections.shuffle(derivative);
        for (Insura al: derivative
             ) {
            System.out.println(al);
        }
        Collections.sort(derivative, InsuraComparator);
        System.out.println();
        Collections.shuffle(derivative);
        for (Insura al: derivative
        ) {
            System.out.println(al);
        }
        Collections.sort(derivative, Insuramap);
        System.out.println();
        Collections.shuffle(derivative);
        for (Insura al: derivative
        ) {
            System.out.println(al);
        }

    }

private static void fillderivative(List<Insura> derivative) {
       derivative.add(new AutoInsura("e456тх82", 5000,70,71));
    derivative.add(new AutoInsura("с665тс82", 4000,60,57));
    derivative.add(new AutoInsura("н990то82", 3000,90,88));
    derivative.add(new RealtyInsura("rcbaxsadovy43", 20000,70,71));
    derivative.add(new RealtyInsura("rcsimfrozylux55", 45000,60,57));
    derivative.add(new RealtyInsura("sevgorpychenko32", 50000,90,88));
    derivative.add(new PeopleInsura("VictorVV", 5000,70,71));
    derivative.add(new PeopleInsura("IvanovGE", 6000,60,57));
    derivative.add(new PeopleInsura("JeliliovRA", 3000,90,88));
}

}
