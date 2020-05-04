##ooh secrets and stuff

image:
  repository: kubernetesdashboarddev/kubernetes-dashboard-amd64
  tag: 7fa1563213bddeaff42183511a24c04268

ingress:
  enabled: true
  hosts:
  - "k8s-d.folatform.io"
  - "com.rally.cognito"
  - "com.rally.taki"
  - "rally-io-rnbcomm-service"
  - "rally-shoutout-admin"
  - "rallynetworkio"
  paths:
  - /
  - /*
  annotations:
    kubernetes.io/ingress.class: traefik

extraArgs:
  - --system-banner="Forte Cluster"
  - --namespace=default

rbac:
  clusterAdminRole: false

metadata:
  annotations:
    kompose.cmd: kompose convert
    kompose.version: 1.21.0 (992df58d8)
  creationTimestamp: null
  labels:
    io.kompose.service: rally-io-rnbcomm-service
  name: rally-io-rnbcomm-service
