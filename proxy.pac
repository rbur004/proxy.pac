function FindProxyForURL (url, host) {
  if (isInNet(host, "10.0.0.0", "255.0.0.0")) {
    return "SOCKS4 127.0.0.1:8000";
  }
  if (isInNet(host, "172.16.0.0", "255.240.0.0")) {
    return "SOCKS4 127.0.0.1:8000";
  }
  if (isInNet(host, "192.168.0.0", "255.255.0.0")) {
    return "SOCKS4 127.0.0.1:8000";
  }
  if (isInNet(host, "100.64.0.0", "255.192.0.0")) {
    return "SOCKS4 127.0.0.1:8000";
  }
  return "DIRECT";
}
