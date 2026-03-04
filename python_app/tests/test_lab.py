
# TODO: Escribe pruebas unitarias para es_palindromo y suma.
# Sugerencias:
# - "radar" -> True, "anita lava la tina" -> True, "python" -> False, "" -> True, "Radar" -> True
# - suma(2,3) -> 5; suma(0,5) -> 5; suma(-2,3) -> 1

from ..palindromo import es_palindromo
from ..utils import suma


def test_es_palindromo_radar():
    assert es_palindromo("radar")

def test_es_palindromo_Radar():
    assert es_palindromo("Radar")

def test_es_palindromo_anita_lava_la_tina():
    assert es_palindromo("anita lava la tina")

def test_es_palindromo_python():
    assert not es_palindromo("python")

def test_es_palindromo_vacio():
    assert es_palindromo("")


