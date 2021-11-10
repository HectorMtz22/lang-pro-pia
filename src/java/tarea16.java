// Héctor Mauricio Flores Martínez 1897759
import javax.swing.JOptionPane;

public class tarea16 {
  public static void main(String[] args) {
    double resultado;
    String[] options = {"°C -> °F", "°F -> °C"};
    int seleccion = JOptionPane.showOptionDialog(
      null, 
      "Ingresa una opción", 
      "Tarea 16", 
      JOptionPane.DEFAULT_OPTION, 
      JOptionPane.INFORMATION_MESSAGE, 
      null, 
      options, 
      options[0] 
    );

    String inputGrados = JOptionPane.showInputDialog("Ingresa la temperatura"); 
    float grados = Float.parseFloat(inputGrados);

    if (seleccion == 0) {
      // Es de Celsius a Farenheit
      resultado = (grados * 1.8) + 32;
    } else {
      // Es de Farenheit a Celsius
      resultado = (grados - 32) / 1.8;
    }

    String mensajeFinal = String.format("El resultado es: %.2f", resultado);
    JOptionPane.showMessageDialog(
      null, 
      mensajeFinal, 
      "Tarea 16", 
      JOptionPane.INFORMATION_MESSAGE
    );
    System.out.println(mensajeFinal);
  }
}
