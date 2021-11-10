With Gnat.IO; use Gnat.IO;

procedure ej2 is
   type Peras is new Integer;
   type Naranjas is new Integer;

   P : Peras;
   N : Naranjas;
   S : Integer;

   begin
      Put ("Ingrese primer operando entero: ");
      Get (Integer(N));
   New_Line;
   Put ("Ingrese segundo operando entero: ");
      Get (Integer(P));
   New_Line;
   S:= Integer(P)+Integer(N);
   Put ("La suma es: ");
   Put (S);
   end ej2;
   