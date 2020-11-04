public class AutoInsura extends Insura {
    private int acoast;
    private int arisk;
    private InsuraType type;

    public AutoInsura(String client, int acoast, int arisk, int range) {
        this.acoast = acoast;
        this.arisk = arisk;
        this.type = InsuraType.Auto;
        super.setRange(range);
        super.setClient(client);
    }

    @Override
    public String toString() {
        return "AutoInsura{" +
                ", range=" + super.getRange() +
                ", acoast=" + acoast +
                ", arisk=" + arisk +
                ", type=" + type +
                '}';
    }
}
