// Héctor Mauricio Flores Martínez
import java.util.Scanner;

public class tarea21 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    System.out.println("Matriz 1");
    System.out.print("Ingresa el número de las filas: ");
    int n = input.nextInt();

    System.out.print("Ingresa el número de columnas: ");
    int m = input.nextInt();

    // Declaramos la matriz1
    int[][] matrix1 = new int[n][m];
    matrix1 = llenaMatriz(input, n, m);

    int n2, m2;
    do {
      System.out.println("Matriz 2");
      System.out.print("Ingresa el número de las filas: ");
      n2 = input.nextInt();

      System.out.print("Ingresa el número de columnas: ");
      m2 = input.nextInt();
      // Verificación si son de la misma longitud
      if (n != n2 || m != m2) {
        System.out.println("Las matrices deben tener la misma longitud\n");
      }
    } while (n != n2 || m != m2);

    // Declaramos la matriz2
    int[][] matrix2 = new int[n][m];
    matrix2 = llenaMatriz(input, n, m);
    // Hacemos la suma en otra matriz
    int[][] matrix3 = new int[n][m];
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        matrix3[i][j] = matrix1[i][j] + matrix2[i][j];
      }
    }

    // Subrutina vista en tarea 20
    imprimirMatriz(matrix3, n, m);

    input.close();
  }
  // Subrutina para llenar la matriz
  // Se vió por primera vez en tarea 20
  public static int[][] llenaMatriz (Scanner input, int n, int m) {
    int[][] matrix = new int[n][m];
    // Llenamos la matriz
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        System.out.print("A[" + i + "][" + j + "] = ");
        matrix[i][j] = input.nextInt();
      }
    }
    return matrix;
  }

  // Subrutina para imprimir la matriz
  // Se vió por primera vez en tarea 20
  public static void imprimirMatriz (int[][] matrix, int n, int m) {
    // Imprime la matriz
	  System.out.println("\nMatriz");
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        // Formatea los números
        System.out.printf("%4d ", matrix[i][j]);
      }
      System.out.println();
		}
  }
}
