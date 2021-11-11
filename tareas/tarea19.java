// Héctor Mauricio Flores Martínez 1897759
import java.util.Arrays;
import java.util.Scanner;

public class tarea19 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    int n;
    int[] A;

    // El tamaño del vector
    System.out.print("Ingrese el total de números: ");
    n = input.nextInt();
    A = new int[n];

    // Recupera cada vector de forma dinámica
    for (int i = 0; i < n; i++) {
        System.out.print("A[" + i + "] = ");
        A[i] = input.nextInt();
    }

    // Ahora vamos a buscar el valor
    System.out.print("Ingrese el valor a buscar: ");
    int buscarValor = input.nextInt();

    // Inicializamos la variable y vamos a ver cuantos valores hay
    int valoresEncontrados = 0;
    for (int i = 0; i < n; i++) {
      if (A[i] == buscarValor) {
        valoresEncontrados++;
      }
    }

    // Cadena que imprime la cantidad de valores encontrados
    System.out.println("El número " 
      + buscarValor 
      + " aparece " 
      + valoresEncontrados 
      + " veces en el vector:"
    );

    // Cadena que imprime el Array
    System.out.println(Arrays.toString(A));

    input.close();
  }
  
}
