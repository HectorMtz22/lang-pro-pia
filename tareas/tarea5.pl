%% % padre(X,Y): X es padre de Y

padre(luis,ana).
padre(juan,luis).

%% % abuelo(X,Y): X es abuelo de Y

abuelo(X,Y) :-
    padre(X,Z), padre(Z,Y)