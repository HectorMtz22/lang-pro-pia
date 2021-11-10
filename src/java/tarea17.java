// Héctor Mauricio Flores Martínez 1897759
import javax.swing.JOptionPane;

public class tarea17 {
  public static void main(String[] args) {
    double resultado = 0;
    String[] options = {
      "Dolar", 
      "Euro", 
      "Yen", 
      "DolarHK"
    };
    int seleccion = JOptionPane.showOptionDialog(
      null, 
      "Conversor de Pesos a otra moneda", 
      "Tarea 17", 
      JOptionPane.DEFAULT_OPTION, 
      JOptionPane.INFORMATION_MESSAGE, 
      null, 
      options, 
      options[0] 
    );

    String inputDinero = JOptionPane.showInputDialog("Ingresa la cantidad (en pesos)"); 
    float dinero = Float.parseFloat(inputDinero);

    switch (seleccion) {
      case 0:
        // Dolar
        System.out.println("Dolar");
        resultado = dinero * 0.049;
        break;
      
      case 1:
        // Euro 
        System.out.println("Euro");
        resultado = dinero * 0.042;
        break;
      
      case 2:
        // Yen (Japones)
        System.out.println("Yen");
        resultado = dinero * 5.55;
        break;
      
      case 3:
        // DolarHK
        System.out.println("DolarHK");
        resultado = dinero * 0.38;
        break;
    
      default:
        System.out.println("Datos Inválidos");
        break;
    }


    String mensajeFinal = String.format("El resultado es: %.2f", resultado);
    JOptionPane.showMessageDialog(
      null, 
      mensajeFinal, 
      "Tarea 17", 
      JOptionPane.INFORMATION_MESSAGE
    );
    System.out.println(mensajeFinal);
  }
}
