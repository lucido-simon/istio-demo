variable "kubeconfig_context_name" {
  type    = string
  default = "k3d-istio-demo"
}

variable "kubeconfig_path" {
  type    = string
  default = "~/.kube/istio-demo"
}
