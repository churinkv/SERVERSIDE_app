import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.SocketException;
import java.util.ArrayList;
import java.util.List;

public class Server {
    private DatagramSocket socket;
    private DatagramPacket packet;
    private BufferedReader in=null;
    private String str;
    private byte[] buffer;
    private InetAddress address;
    private List<String> list;
    public Server()throws SocketException {
        System.out.println("Отправка сообщений...");
        socket=new DatagramSocket();
        list = new ArrayList();
        list.add("1");
        list.add("1");
        list.add("2");
        list.add("3");
        list.add("4");
        transmit();
    }

    private void transmit(){
        in=new BufferedReader(new InputStreamReader(System.in));
        for (String message : list){

            try {

                buffer = message.getBytes();
                address=InetAddress.getByName("233.0.0.1");
                // отправка пакета датаграм на порт 1502
                packet = new DatagramPacket(
                        buffer,
                        buffer.length,
                        address,
                        1502
                );
                socket.send(packet);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }

    public static void main(String[] args) {
        try {
            new Server();
        } catch (SocketException e) {
            e.printStackTrace();
        }
    }
}