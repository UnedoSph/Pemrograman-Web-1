print('Program Menghitung Luas & Keliling Lingkaran')
print('--------------------------------------------')

r = float(input('Masukkan nilai Jari-jari : '))

phi = 3.14
diameter = 2*r

luas = phi*r*r
keliling = phi*diameter
print('\nLuasnya    =', str("%.2f" % luas))
print('Kelilingnya =', str("%.2f" % keliling))