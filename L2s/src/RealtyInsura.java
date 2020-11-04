public class RealtyInsura extends Insura{
    private int rcoast;
    private int rrisk;

    private InsuraType type;

    public RealtyInsura(String client, int rcoast, int rrisk, int range) {
        this.rcoast = rcoast;
        this.rrisk = rrisk;
        this.type = InsuraType.Realty;
        super.setRange(range);
        super.setClient(client);
    }

    @Override
    public String toString() {
        return "RealtyInsura{" +
                ", range=" + super.getRange() +
                ", rcoast=" + rcoast +
                ", rrisk=" + rrisk +
                ", type=" + type +
                '}';
    }
}
