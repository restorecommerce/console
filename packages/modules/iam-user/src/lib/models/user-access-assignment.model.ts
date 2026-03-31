export interface UserAccessAssignmentVm {
  id: string;
  role: string;
  roleLabel: string;
  scopeType: 'user' | 'organization';
  scopeTypeLabel: string;
  scopeInstance: string;
  scopeLabel: string;
  source: 'system' | 'manual';
  locked?: boolean;
}
