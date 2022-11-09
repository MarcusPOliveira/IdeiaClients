function cpfMask(value: string) {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{1,2})/, '$1-$2');
  value = value.replace(/(-\d{2})\d+?$/, '$1');
  return value;
}

function cnpjMask() {

}

export { cpfMask, cnpjMask };