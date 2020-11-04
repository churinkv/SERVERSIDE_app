public class PeopleInsura extends Insura {
    private int pcoast;
    private int prisk;
    private InsuraType type;

    public PeopleInsura(String client, int pcoast, int prisk, int range) {
        this.pcoast = pcoast;
        this.prisk = prisk;
        this.type = InsuraType.People;
        super.setRange(range);
        super.setClient(client);
    }

    @Override
    public String toString() {
        return "PeopleInsura{" +
                ", range=" + super.getRange() +
                ", pcoast=" + pcoast +
                ", prisk=" + prisk +
                ", type=" + type +
                '}';
    }
}
