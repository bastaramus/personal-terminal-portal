export interface Project {
  name: string;
  type: string;
  desc: string;
  tags: string[];
  stars: number;
  forks: number;
  status: "ACTIVE" | "MAINTAINED" | "BETA" | "ARCHIVED";
  repo?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    name: "AWS-HYBRID-BASELINE",
    type: "OPEN SOURCE",
    desc: "Terraform modules for a production-ready hybrid AWS + VMware vSphere baseline. Covers VPC design, Transit Gateway, Direct Connect patterns, IAM boundaries, and vSphere network integration.",
    tags: ["TERRAFORM", "AWS", "VSPHERE"],
    stars: 1243,
    forks: 187,
    status: "ACTIVE",
    repo: "https://github.com/xomenko/aws-hybrid-baseline",
  },
  {
    name: "K8S-PLATFORM-BOOTSTRAP",
    type: "OPEN SOURCE",
    desc: "Opinionated Terraform + Helm bootstrap for production-ready Kubernetes clusters on AWS EKS. Includes autoscaling, IRSA, Ingress, cert-manager, and a full observability stack out of the box.",
    tags: ["TERRAFORM", "EKS", "KUBERNETES"],
    stars: 892,
    forks: 103,
    status: "ACTIVE",
    repo: "https://github.com/xomenko/k8s-platform-bootstrap",
  },
  {
    name: "ANSIBLE-INFRA-PLAYBOOKS",
    type: "TOOL",
    desc: "Battle-tested Ansible playbooks and roles for hybrid infrastructure: Linux hardening, Docker/Kubernetes node setup, VMware guest provisioning, and AWS EC2 bootstrapping via Packer.",
    tags: ["ANSIBLE", "PACKER", "AWS"],
    stars: 654,
    forks: 71,
    status: "MAINTAINED",
    repo: "https://github.com/xomenko/ansible-infra-playbooks",
  },
  {
    name: "OBSERVABILITY-STACK",
    type: "TOOL",
    desc: "Batteries-included observability setup: Prometheus, Grafana, Loki, and Jaeger deployed via Helm with pre-built dashboards, alerting rules, and SLO templates for Kubernetes workloads.",
    tags: ["PROMETHEUS", "GRAFANA", "LOKI"],
    stars: 429,
    forks: 48,
    status: "MAINTAINED",
    repo: "https://github.com/xomenko/observability-stack",
  },
];
