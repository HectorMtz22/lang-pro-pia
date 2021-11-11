// Héctor Mauricio Flores Martínez 1897759
import java.lang.Math;
import java.util.Scanner;

public class tarea18 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    // Utilizamos el scanner para leer el número
    System.out.print("Ingresa la cantidad de números: "); 
    int n = input.nextInt();

    int multiplier = 1;
    for (int i = 1; i <= n; i++) {
      // La serie con la operación i^multiplier
      // La variable multiplier incrementa 2 en cada ciclo
      int operacion = (int) Math.pow(i, multiplier);
      multiplier += 2;
      
      System.out.print(operacion + ", ");

    }
    System.out.println();

    input.close();
  }
}
